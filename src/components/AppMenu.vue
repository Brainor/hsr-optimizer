<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from 'vue-router';
import Menu from 'primevue/menu';

const { visible } = defineProps<{ visible: boolean }>();
const router = useRouter();
const items = [
    {
        label: 'Optimization',
        icon: 'pi pi-chart-line',
        items: [
            { label: 'Optimizer', icon: 'pi pi-chart-bar' },
            { label: 'Characters', icon: 'pi pi-user' },
            { label: 'Relics', icon: 'pi pi-calculator' },
            { label: 'Import / Save', icon: 'pi pi-file-export' },
            { label: 'Get Started', icon: 'pi pi-book', command: () => router.push('/about') }
        ]
    },
    {
        label: 'Tools', icon: 'pi pi-wrench', items: [
            { label: 'Relic Scorer', icon: 'pi pi-star', },
            { label: 'Changelog', icon: 'pi pi-list', },
        ]
    },
    {
        label: 'Links', icon: 'pi pi-share-alt',
        items: [
            { label: 'Discord', icon: 'pi pi-discord', url: 'https://discord.gg/rDmB4Un7qg' },
            { label: 'Github', icon: 'pi pi-github', url: 'https://github.com/fribbels/hsr-optimizer' }
        ]
    }
];
</script>

<template>
    <Menu :model="items" />
</template>