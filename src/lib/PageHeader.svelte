<script>
    import { goto } from '$app/navigation'; // Importing goto for navigation
    import { auth } from '$lib/auth';

    // Function to redirect to the login page for authorized users
    function redirectToLogin() {
        goto('/login/inquiries'); // Redirecting to the login page located under src/routes/useradmin/+page.svelte
    }
</script>

<main>
    <header class="space-y-4">
        <nav class="flex gap-4">
            {#if $auth === undefined}
                <p>Loading...</p>
            {:else if $auth === null}

                <button class="hover:underline" on:click={redirectToLogin}>Sign In</button> <!-- Redirecting to login -->
            {:else}
                <button class="hover:underline" on:click={auth.sign_out}>Sign Out</button> 
            {/if}
        </nav>
    </header>
</main>


