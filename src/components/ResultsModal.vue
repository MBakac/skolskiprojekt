<template>
    <div class="container">
        <div class="notification">
            <div style="text-align: center;">
                <strong>Bravo!</strong>
                <br>
                Imaš {{right}} od {{count}} točnih odgovora!
            </div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: "ResultsModal",
        props: ["right", "count"]
    }
</script>