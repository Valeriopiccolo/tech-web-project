function Footer() {
	return (
		<div className="bottom-0 w-full h-14 ring-2">
			<div className="flex items-center h-full w-2/3 m-auto justify-between text-sm">
				<h1>Parthenogame&#8482; - all rights reserved - 2023</h1>
				<p>Piccolo Valerio - Pennacchio Diego</p>
				<ol className="flex gap-2">
					<li>
						<a href="/contact-us" className="underline">
							Contact Us
						</a>
					</li>
					<li>
						<a href="/addGame" className="underline">
							Add Game
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Valeriopiccolo/tech-web-project.git"
							className="underline"
						>
							GitHub
						</a>
					</li>
				</ol>
			</div>
		</div>
	);
}

export default Footer;
