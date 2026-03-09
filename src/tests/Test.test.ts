import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth"; // استيراد الدالة الحقيقية من المشروع

describe("getAPIKey", () => {
  test("returns the correct API key from headers", () => {
    // محاكاة للهيدرز التي يرسلها المستخدم
    const headers = {
      authorization: "ApiKey hello-world-123"
    };
    
    const result = getAPIKey(headers);
    
    // نتوقع أن الدالة تستخلص "hello-world-123" فقط
    expect(result).toBe("hello-world-123");
  });

  test("throws an error if Authorization header is missing", () => {
    const headers = {}; // هيدرز فارغة
    
    // نتوقع أن الدالة ستفشل (Throw Error)
    expect(() => getAPIKey(headers)).toThrow();
  });
});