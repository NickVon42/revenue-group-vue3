import { defineStore } from 'pinia'

export const useRevenueGroupStore = defineStore('revenueGroups', {
    state: () => ({
        revenueGroups: [] as RevenueGroup[],
    }),
    actions: {
        addRevenueGroup(newGroup: RevenueGroup) {
            this.revenueGroups.push(newGroup)
        },
    },
})