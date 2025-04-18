import {type NoticePluginOptions} from '@vuepress/plugin-notice';
import {instance as ver} from "../../lib/versioning";

const actionLatest = {
    text: "View latest server documentation",
    link: "/latest.html"
};

export const notices: NoticePluginOptions = {
    config: [
        {
            path: "/clients/tcp/dotnet/21.2/",
            title: "This documentation is for the legacy TCP client",
            content: "This client is no longer supported because newer versions of KurrentDB only support gRPC-based client protocol. Please use the latest client libraries.",
            actions: [
                {
                    text: "Migration guide",
                    link: "/clients/tcp/dotnet/21.2/migration-to-gRPC.html"
                }
            ]
        },
        {
            path: "/server/v5/",
            title: "This documentation is for the unsupported EventStoreDB version",
            content: "EventStoreDB v5 and below are out of support. Please migrate to the latest server version.",
            actions: [actionLatest]
        },
        {
            path: "/server/v23.10/",
            title: "EventStoreDB v23.10",
            content: "EventStoreDB v23.10 nearing end of life. Upgrade to the latest server version.",
            actions: [actionLatest]
        },
        {
            path: "/server/v22.10/",
            title: "EventStoreDB v22.10",
            content: "EventStoreDB v22.10 is out of support. Upgrade to the latest server version.",
            actions: [actionLatest]
        },
        {
            path: "/server/v24.6/",
            title: "EventStoreDB v24.6",
            content: "EventStoreDB v24.6 is out of support. Upgrade to the latest server version.",
            actions: [actionLatest]
        },
        {
            path: "/server/v24.2/",
            title: "EventStoreDB v24.2",
            content: "EventStoreDB v24.2 is out of support. Upgrade to the latest server version.",
            actions: [actionLatest]
        }
    ]
}