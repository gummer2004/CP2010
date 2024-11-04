<template>
    <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
        <div class="flex items-center justify-between py-3 px-4 sm:p-0">
        <div><a class="block hover:bg-gray-700 focus:bg-gray-700 focus:outline-none rounded px-2 py-1" href="#">   
            <img class="h-8" src="/images/logo-inverted.svg" alt="Workcation">
            </a>
        </div>  
        <button @click="isOpen = !isOpen" type="button" class="block sm:hidden text-gray-500 hover:text-gray-50 focus:text-gray-50 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="h-6 w-6 fill-current">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

        </button>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'"   class="text-white px-2 pb-4 sm:flex sm:p-0">
        <a class="block px-2 py-1 font-semibold rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none" href="#">List your property</a>
        <a class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none sm:mt-0 sm:ml-2" href="#">Trips</a>
        <a class="mt-1 block px-2 py-1 font-semibold rounded hover:bg-gray-700 focus:bg-gray-700 focus:outline-none sm:mt-0 sm:ml-2" href="#">Messages</a>
        </nav>
    </header>
</template>

<script>
export default {
    data(){
        return {
            isOpen: false,
        }
    }
}
</script>
