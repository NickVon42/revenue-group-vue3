<script setup lang="ts">
import { useRevenueGroupStore } from '@/store/revenueGroupsStore';
import { storeToRefs } from 'pinia';

const store = useRevenueGroupStore()
const { revenueGroups } = storeToRefs(store)

</script>

<template>
    <div>
        <div v-for="group in revenueGroups" :key="group.name" class=" w-3/3 m-10">
            <p class=" text-lg">{{ group.name }}</p>
            <p class=" text-base">{{ group.description }}</p>
            <ul class="mt-5" v-if="group.rules.length > 0">

                <li v-for="rules in group.rules" :key="rules.id">
                    {{ `${rules.field} - ${rules.operator}` }}

                    <div v-for="param in rules.parameters" :key="param">
                        {{ param }}
                    </div>

                </li>
            </ul>
        </div>
    </div>
</template>
