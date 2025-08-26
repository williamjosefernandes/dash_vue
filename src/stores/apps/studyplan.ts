import { defineStore } from 'pinia';
import axios from 'axios';
import type { StudyPlanStateProps, StudyPlan } from '@/types/studyplan/index';

export const useStudyPlanStore = defineStore({
  id: 'studyplan',
  state: (): StudyPlanStateProps => ({
    studyplans: [],
    error: null
  }),
  getters: {
    getStudyPlans: (state) => state.studyplans
  },
  actions: {
    // Fetch Study Plans
    async fetchStudyPlans() {
      try {
        const response = await axios.get('/api/data/studyplans');
        this.studyplans = response.data;
      } catch (error) {
        this.error = error;
        console.error(error);
      }
    },

    // Delete Study Plan
    async deleteStudyPlan(planId: string) {
      try {
        const index = this.studyplans.findIndex((plan) => plan.id === planId);
        if (index > -1) {
          this.studyplans.splice(index, 1);
        }
      } catch (error) {
        this.error = error;
        console.error(error);
      }
    },

    // Add Study Plan (for future functionality)
    async addStudyPlan(studyplan: StudyPlan) {
      try {
        this.studyplans.push(studyplan);
      } catch (error) {
        this.error = error;
        console.error(error);
      }
    },

    // Update Study Plan (for future functionality)
    async updateStudyPlan(planId: string, updatedPlan: Partial<StudyPlan>) {
      try {
        const index = this.studyplans.findIndex((plan) => plan.id === planId);
        if (index > -1) {
          this.studyplans[index] = { ...this.studyplans[index], ...updatedPlan };
        }
      } catch (error) {
        this.error = error;
        console.error(error);
      }
    }
  }
});