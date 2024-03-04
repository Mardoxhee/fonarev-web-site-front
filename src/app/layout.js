"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Header from './../components/header'
import Footer from './../components/footer'
import { Poppins } from 'next/font/google';
import { store } from './store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Fonarev RDC",
//   description: "Fonds national des réparations des victimes",
// };

// 
const poppins = Poppins({
  subsets: ['latin'], // Specify desired font subsets (optional)
  weight: ['300', '400', '700', '200', '500', '600', '800'], // Specify desired font weights (optional)
});

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={poppins.className}>
          <Header/>
            {children}
          <Footer/>
          </body>
      </html>
    </Provider>
  );
}
