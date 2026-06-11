import type { RoadmapDomain } from "../types";

export const mobile: RoadmapDomain = {
  slug: "mobile",
  label: "Mobile",
  flag: "Specialization",
  shortDesc:
    "Cross-platform and native mobile development for iOS and Android.",
  longDesc:
    "Build mobile applications that feel native on iOS and Android. Start with React Native and Expo, then dive into native APIs, app store deployment, and performance optimization for mobile.",
  color: "#F39B52",
  bg: "rgba(243,155,82,0.10)",
  meta: { nodes: 30, hours: 90 },
  nodes: [
    // Foundation
    {
      id: "mo-rn",
      title: "React Native Basics",
      type: "core",
      level: 1,
      description:
        "Core components, StyleSheet API, Flexbox layout, and the React Native mental model vs React web.",
      tags: ["react-native"],
      resources: [{ label: "React Native Docs", href: "https://reactnative.dev/docs/getting-started" }],
    },
    {
      id: "mo-expo",
      title: "Expo & Dev Environment",
      type: "core",
      level: 1,
      description:
        "Set up Expo, use Expo Go for development, manage app.json configuration, and understand managed vs bare workflow.",
      tags: ["tooling"],
      resources: [{ label: "Expo Docs", href: "https://docs.expo.dev" }],
    },
    {
      id: "mo-ui",
      title: "Mobile UI Patterns",
      type: "core",
      level: 1,
      description:
        "Touch gestures, mobile-first layouts, native UI conventions, safe areas, and platform differences.",
      tags: ["ui"],
    },
    // Intermediate
    {
      id: "mo-nav",
      title: "Navigation (Expo Router)",
      type: "core",
      level: 2,
      description:
        "File-based routing with Expo Router: stacks, tabs, modals, deep linking, and URL-based navigation.",
      tags: ["navigation"],
      resources: [{ label: "Expo Router Docs", href: "https://docs.expo.dev/routing/introduction" }],
    },
    {
      id: "mo-state",
      title: "State Management",
      type: "core",
      level: 2,
      description:
        "Zustand or Redux for global state. React Query for server state. Context for theme/auth providers.",
      tags: ["state"],
    },
    {
      id: "mo-native-api",
      title: "Native APIs & Permissions",
      type: "core",
      level: 2,
      description:
        "Camera, location, push notifications, file system, biometrics using Expo SDK modules.",
      tags: ["native"],
    },
    {
      id: "mo-anim",
      title: "Animations (Reanimated)",
      type: "optional",
      level: 2,
      description:
        "Smooth 60fps animations with React Native Reanimated 3 and Gesture Handler.",
      tags: ["animation"],
      resources: [{ label: "Reanimated Docs", href: "https://docs.swmansion.com/react-native-reanimated" }],
    },
    // Advanced
    {
      id: "mo-push",
      title: "Push Notifications",
      type: "optional",
      level: 3,
      description:
        "Implement push notifications with Expo Notifications or Firebase Cloud Messaging (FCM/APNs).",
      tags: ["notifications"],
    },
    {
      id: "mo-offline",
      title: "Offline & Data Sync",
      type: "optional",
      level: 3,
      description:
        "Handle offline-first with AsyncStorage, SQLite (expo-sqlite), or WatermelonDB. Sync strategies.",
      tags: ["offline"],
    },
    {
      id: "mo-perf",
      title: "Performance Optimization",
      type: "core",
      level: 3,
      description:
        "FlatList optimization, image caching (Expo Image), JS thread profiling, and reducing bridge overhead.",
      tags: ["performance"],
    },
    {
      id: "mo-deploy",
      title: "App Store Deployment",
      type: "core",
      level: 3,
      description:
        "Build, sign, and submit to Apple App Store and Google Play Store. App review and update process.",
      tags: ["deployment"],
    },
    // Expert
    {
      id: "mo-flutter",
      title: "Flutter (Alternative Path)",
      type: "optional",
      level: 4,
      description:
        "Build native-compiled apps with Flutter and Dart for performance-critical UIs.",
      tags: ["flutter"],
    },
    {
      id: "mo-native-module",
      title: "Native Modules (Swift/Kotlin)",
      type: "optional",
      level: 4,
      description:
        "Write custom native modules in Swift/Kotlin when Expo SDK doesn't cover your use case.",
      tags: ["native"],
    },
    {
      id: "mo-ci",
      title: "Mobile CI/CD (EAS Build)",
      type: "optional",
      level: 4,
      description:
        "Automate builds and deployments with Expo Application Services (EAS) or Fastlane.",
      tags: ["cicd"],
    },
  ],
};
