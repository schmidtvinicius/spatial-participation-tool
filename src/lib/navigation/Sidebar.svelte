<script>
	import logo from '$lib/assets/images/logo.png';
	import SidebarItem from './SidebarItem.svelte';
	import {
		faArrowRightToBracket,
		faFile,
		faEnvelope,
		faHouse,
		faCircleXmark,
		faQuestion
	} from '@fortawesome/free-solid-svg-icons';
</script>

<nav id="sidebar">
	<div class="sidebar-top">
		<img src={logo} alt="The application logo" />
		<h2 class="app-name">Spatial Quality</h2>
	</div>
	<div class="sidebar-items">
		<SidebarItem icon={faHouse} name="Home" active={true} />
		<SidebarItem icon={faEnvelope} name="Contact" />
	</div>
</nav>

<style>
	#sidebar {
		position: fixed;
		min-height: 100vh;
		width: 10%;
		margin: 0;
		background-color: white;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.2);
		left: 0;
		top: 0;
	}

	.sidebar-top {
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
		padding-top: 1em;
		display: flex;
		flex-direction: column;
	}
</style>
