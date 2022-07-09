<script lang="ts">
	import logo from '$lib/assets/images/logo.png';
	import SidebarItem from './SidebarItem.svelte';
	import { faArrowRightToBracket, faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons';
	import { HOME_PATH, CONTACT_PATH, LOGIN_PATH } from '$lib/assets/text/paths';

	enum ItemName {
		Home = 'Home',
		Contact = 'Contact',
		Login = 'Login'
	}

	let activeItem = ItemName.Home;
</script>

<nav id="sidebar">
	<div class="sidebar-top">
		<img src={logo} alt="The application logo" />
		<h2 class="app-name">Spatial Quality</h2>
	</div>
	<div class="sidebar-items">
		<SidebarItem
			icon={faHouse}
			name={ItemName.Home}
			active={activeItem === ItemName.Home}
			link={HOME_PATH}
			on:changeActiveItem={() => (activeItem = ItemName.Home)}
		/>
		<SidebarItem
			icon={faEnvelope}
			name={ItemName.Contact}
			active={activeItem === ItemName.Contact}
			link={CONTACT_PATH}
			on:changeActiveItem={() => (activeItem = ItemName.Contact)}
		/>
		<div class="auth-item">
			<SidebarItem
				icon={faArrowRightToBracket}
				name={ItemName.Login}
				active={activeItem === ItemName.Login}
				link={LOGIN_PATH}
				on:changeActiveItem={() => (activeItem = ItemName.Login)}
			/>
		</div>
	</div>
</nav>

<style>
	#sidebar {
		display: flex;
		flex-direction: column;
		position: fixed;
		height: 100vh;
		width: 10%;
		margin: 0;
		background-color: white;
		box-shadow: var(--myBoxShadow);
		left: 0;
		top: 0;
	}

	.sidebar-top {
		flex: 0;
		height: fit-content;
		background-color: var(--myBlue);
		padding-bottom: 10px;
		padding-top: 10px;
	}

	img {
		width: 50%;
		background-color: white;
		display: block;
		margin: auto;
		clip-path: circle(45% at 47.5% 50%);
	}

	.app-name {
		color: white;
		text-align: center;
	}

	.sidebar-items {
		flex: 1;
		padding-top: 1em;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.auth-item {
		margin-top: auto;
	}
</style>
