import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { ChatServiceClient } from "./chat.client";
import { addNotification } from "utils/notifications";

const transport = new GrpcWebFetchTransport({
  baseUrl: "http://localhost:8080",
  interceptors: [
    {
      interceptUnary(next, method, input, options) {
        const original = next(method, input, options);
        original.response.catch((err) => {
          console.error("[ERR] ", err);
          if ("message" in err && typeof err.message === "string")
            addNotification(
              "error",
              err.message,
              JSON.stringify(original.request)
            );
        });
        return original;
      },
      interceptDuplex(next, method, options) {
        const original = next(method, options);
        original.responses.onError((err) => {
          console.error("[ERR] ", err);
          if ("message" in err && typeof err.message === "string")
            addNotification("error", err.message, err.message);
        });
        return original;
      },
    },
  ],
});

export const client = new ChatServiceClient(transport);
