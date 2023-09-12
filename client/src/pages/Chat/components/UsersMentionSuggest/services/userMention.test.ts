import { describe, expect, it } from "vitest";
import { mentionDetector, newMsgCreator } from ".";
import { User } from "proto/chat";

describe("mentionDetector()", () => {
  it("should detect the mention if there is only one", () => {
    //Arrange
    const testMsg = "@testUser";
    const cursorPos = testMsg.length;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    const userWithOutAtSign = testMsg.replace("@", "");
    expect(result).toEqual({ open: true, mention: userWithOutAtSign });
  });

  it("should detect nothing if there is no mention", () => {
    //Arrange
    const testMsg = "testText1 testText2 testText3";
    const cursorPos = testMsg.length;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    expect(result).toEqual({ open: false, mention: null });
  });

  it("should detect only the last mention if there are multiple matches", () => {
    //Arrange
    const testMsg = "@testUser1 @testUser2 @testUser3";
    const cursorPos = testMsg.length;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    const userWithOutAtSign = "testUser3";
    expect(result).toEqual({ open: true, mention: userWithOutAtSign });
  });

  it("should not detect anything if there is multiple @ signs without spacing", () => {
    //Arrange
    const testMsg = "@testUser1@testUser2@testUser3";
    const cursorPos = testMsg.length;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    expect(result).toEqual({ open: false, mention: null });
  });

  it("should detect only the mention until the cursor position of the user", () => {
    //Arrange
    const testMsg = "@MyTestUser1 @testUser2 @testUser3";
    const cursorPos = 5;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    const expectedMention = testMsg.substring(0, cursorPos).replace("@", "");
    expect(result).toEqual({ open: true, mention: expectedMention });
  });

  it("should not set open to true if there is some mention but the cursor position isn't at it", () => {
    //Arrange
    const testMsg = "@MyTestUser1 Test test test";
    const cursorPos = testMsg.length;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    expect(result).toEqual({ open: false, mention: null });
  });

  it("should detect nothing if there is any whitespace after mention", () => {
    //Arrange
    const testMsg = "@testText1 ";
    const cursorPos = testMsg.length;

    //Act
    const result = mentionDetector(testMsg, cursorPos);

    //Assertion
    expect(result).toEqual({ open: false, mention: null });
  });
});

describe("newMsgCreator()", () => {
  it("should append the full name of user after suggestion and select", () => {
    //Arrange
    const testUser: User = {
      id: "test",
      name: "MyTestUser1",
    };
    const testMsg = "test test @MyTestU";
    const cursorPos = testMsg.length;

    //Act
    const result = newMsgCreator(testMsg, cursorPos, testUser);

    //Assertion
    expect(result).toContain("@" + testUser.name);
  });

  it("should not append the username twice", () => {
    //Arrange
    const testUser: User = {
      id: "test",
      name: "MyTestUser1",
    };
    const testMsg = "test test @MyTestU";
    const cursorPos = testMsg.length;

    //Act
    const result = newMsgCreator(testMsg, cursorPos, testUser);

    //Assertion
    const numOfAtSigns = [...result].filter((char) => char === "@").length;
    expect(numOfAtSigns).toEqual(1);
  });

  it("should work correctly even if the user have entered the full username and the click the add user from suggestion menu", () => {
    //Arrange
    const testUser: User = {
      id: "test",
      name: "MyTestUser1",
    };
    const testMsg = "test test @MyTestUser1";
    const cursorPos = testMsg.length;

    //Act
    const result = newMsgCreator(testMsg, cursorPos, testUser);

    //Assertion
    const numOfAtSigns = [...result].filter((char) => char === "@").length;
    expect(numOfAtSigns).toEqual(1);
    expect(result.endsWith(testUser.name)).toBe(true);
  });
});
