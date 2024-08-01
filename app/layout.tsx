import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import styles from "./Home.module.scss";
import HeaderMy from "@/components/Header";
import {AntdRegistry} from "@ant-design/nextjs-registry";
const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AntdRegistry>
            <html lang="en">
                <body className={inter.className}>
                      <HeaderMy />
                    <div className={styles.main}>
                    <div className={styles.layout}>{children}</div>
                    </div>
                </body>
            </html>
        </AntdRegistry>
    );
}
