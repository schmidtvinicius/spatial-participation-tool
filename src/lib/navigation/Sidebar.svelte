<script>
	import logo from '$lib/assets/images/logo.png';
</script>

<nav id="sidebar">
	<div class="sidebar-top">
		<img class="logo" src={logo} alt="The application logo" />
		<h1 class="app-name">Spatial Quality</h1>
	</div>
	<ul>
		<li>1</li>
		<li>2</li>
		<li>3</li>
		<li>4</li>
	</ul>
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

	.logo {
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
</style>
