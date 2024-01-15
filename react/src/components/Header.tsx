import { ModeToggle } from "./mode-toggle";

function Header() {
	return (
		<div className="py-3 px-5 ring-1 border-white sticky top-0 backdrop-blur-lg">
			<div className="w-full xl:w-2/3 m-auto flex justify-around items-center">
				<a href="/" className="flex gap-4 items-center">
					<img className="w-10 h-10" src="/tabicon.png" alt="logo" />
					<h1 className="text-xl font font-semibold">Parthenogame</h1>
				</a>
				<div>
					<ul className="flex gap-5 items-center">
						<li>
							<a className="font-semibold" href="/register">
								Register
							</a>
						</li>
						<li>
							<a className="font-semibold" href="/login">
								Login
							</a>
						</li>
						<li>
							<a className="font-semibold" href="/updateAccount">
								Account
							</a>
						</li>
						<li>
							<a className="font-semibold" href="/explore">
								Explore
							</a>
						</li>
						<li>
							<ModeToggle />
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
