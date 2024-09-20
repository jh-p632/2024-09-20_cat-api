import React from "react";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
}

export default RootLayout;
