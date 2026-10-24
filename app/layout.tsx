import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'grl.next.door | A little care goes a long way',description:'EmpowHer packs and meaningful giving. Made for care, colour and community.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
