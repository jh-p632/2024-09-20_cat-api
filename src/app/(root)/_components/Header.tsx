import Link from "next/link";
import React from "react";

function Header() {
	return (
		<header className="border-b">
			<div className="pl-[calc((100%-1024px)/2)] container max-w-screen-lg flex items-center py-3 font-bold text-lg">
				<Link href="/">고양이나라</Link>

				<nav className="ml-20">
					<ul>
						<li>
							<Link href={"/cats"}>???</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
