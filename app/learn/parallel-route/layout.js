import Link from "next/link";

export default function RootLayout({ children, team, analytics }) {
    return (
        <html>
            <body className="p-6"><br />
                <div className="p-10 mb-6 bg-sky-600 text-white rounded-xl">
                    Parallel Routes Examples<br />
                </div><br />
                <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
                    <Link href="/learn/parallel-route">Home</Link><br />
                    <Link href="/learn/parallel-route/page-views">Page Views</Link><br />
                    <Link href="/learn/parallel-route/visitors">Visitors</Link><br />
                </nav><br />
                <div className="flex gap-6">
                    {analytics}<br />

                    {team}<br />

                </div>
                {children}
            </body>
        </html>
    );
}