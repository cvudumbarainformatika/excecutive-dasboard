<template>
  <ul class="navigation">
        <li class="active">
            <a href="#">
                <q-icon class="icon" name="home" />
                <span class="text">Home</span>
            </a>
        </li>

        <li>
            <a href="#">
                <q-icon class="icon" name="person" />
                <span class="text">Person</span>
            </a>
        </li>

        <li>
            <a href="#">
                <span class="icon"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></span>
                <span class="text">Search</span>
            </a>
        </li>

        <li>
            <a href="#">
                <span class="icon"><i class="fa-solid fa-cart-shopping"></i></span>
                <span class="text">Cart</span>
            </a>
        </li>

        <li>
            <a href="#">
                <span class="icon"><i class="fa-solid fa-user"></i></span>
                <span class="text">Account</span>
            </a>
        </li>
    </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
ul.navigation{
    display: flex;
    justify-content: center;
    align-items: center;
    // height: 20px;
    width: 100%;
    list-style: none;
    // box-shadow: 25px 25px 75px rgba(0,0,0,0.25),
    // 10px 10px 70px rgba(0,0,0,0.25),
    // inset 5px 5px 10px rgba(0,0,0,0.5),
    // inset 5px 5px 10px rgba(255,255, 255,0.2),
    // inset -5px -5px 15px rgba(0,0,0,0.7);
    // // padding: 0 20px;
    // border-radius: 20px;
}

ul.navigation li{
    width: 20%;
}

ul.navigation li a{
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

}

ul.navigation li a .icon{
    color: rgba(255,255, 255,0.8);
    padding: 5px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    font-size: 1.4rem;
    transition: 0.5s;
}

ul.navigation li.active a .icon{
    transform: translateY(-28px);
    background-color: #2d2d2d;
    color: white;
    box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.25), inset -3px -3px 5px rgba(0, 0, 0, 0.5), inset 3px 3px 15px rgba(255, 255, 255, 0.2);
    border: 3px solid #c7dd00;
}

ul.navigation li a .text{
    color: white;
    // font-family: 'Poppins', sans-serif;
    transition: 0.5s;
    display: none;
}

ul.navigation li.active a .text{
    display: block;
    // background-color: rgba(255,255,255,1);
    color: black;
    font-size: 0.8rem;
    padding: 2px 15px;
    border-radius: 10px;
    box-shadow: 4px 4px 5px rgba(0,0,0,0.25),
    inset -2px -2px 3px rgba(0,0,0,0.5),
    inset 3px 3px 15px rgba(255,255,255,0.2);
}
</style>
