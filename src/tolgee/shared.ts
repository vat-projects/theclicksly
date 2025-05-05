import {
  DevTools,
  FormatSimple,
  Tolgee,
  type TreeTranslationsData,
} from "@tolgee/web";

const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY;
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL;

export const ALL_LANGUAGES = ["en", "de", "it"];

export const DEFAULT_LANGUAGE = "en";

export function TolgeeBase() {
  return (
    Tolgee()
      .use(FormatSimple())
      // replace with .use(FormatIcu()) for rendering plurals, foramatted numbers, etc.
      .use(DevTools())
      .updateDefaults({
        apiKey,
        apiUrl,
        staticData: {
          en: () =>
            import("../../messages/en.json").then(
              (m) => m.default as TreeTranslationsData
            ).catch((error) => {
              console.error('Failed to load English translations:', error);
              return {};
            }),
          de: () =>
            import("../../messages/de.json").then(
              (m) => m.default as TreeTranslationsData
            ).catch((error) => {
              console.error('Failed to load German translations:', error);
              return {};
            }),
          it: () =>
            import("../../messages/it.json").then(
              (m) => m.default as TreeTranslationsData
            ).catch((error) => {
              console.error('Failed to load Italian translations:', error);
              return {};
            }),
        },
      })
  );
}
