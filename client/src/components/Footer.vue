<template>
    <footer class="footer">
        <div class="container">
            <div class="content">
                <p>
                    Forked and Modified by
                    <a href="https://github.com/etuong/pictionary.io.git" target="_blank">Ethan Uong</a> 👨‍💻
                </p>
            </div>
        </div>
    </footer>
</template>

<script>
  export default {
    name: "footer"
  };
</script>

<style lang="scss" scoped>
    .footer {
        width: 100%;
        padding: 1rem;
        text-align: right;
        @media screen and (max-width: 500px) {
            text-align: center;
        }
    }
</style>
