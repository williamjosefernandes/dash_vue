<script setup lang="ts">
import { ref, computed, onMounted, shallowRef } from 'vue';
import { useStudyPlanStore } from '@/stores/apps/studyplan';

import SvgSprite from '@/components/shared/SvgSprite.vue';
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue';
import type { Header, Item } from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const page = ref({ title: 'Lista de Planos de Estudo' });

const breadcrumbs = shallowRef([
  {
    title: 'Planos de Estudo',
    disabled: false,
    href: '#'
  },
  {
    title: 'Lista',
    disabled: true,
    href: '#'
  }
]);

const store = useStudyPlanStore();

const getStudyPlans = computed(() => {
  return store.getStudyPlans;
});

onMounted(() => {
  store.fetchStudyPlans();
});

const searchField = ref('title');
const searchValue = ref('');

const headers: Header[] = [
  { text: 'Título', value: 'title', sortable: true },
  { text: 'Matéria', value: 'subject', sortable: true },
  { text: 'Instrutor', value: 'instructor', sortable: true },
  { text: 'Duração', value: 'duration', sortable: true },
  { text: 'Dificuldade', value: 'difficulty', sortable: true },
  { text: 'Estudantes', value: 'students', sortable: true },
  { text: 'Progresso', value: 'progress', sortable: true },
  { text: 'Status', value: 'status', sortable: true },
  { text: 'Ação', value: 'operation' }
];
const items = ref(getStudyPlans);
const themeColor = ref('rgb(var(--v-theme-primary))');
const { deleteStudyPlan } = store;

const itemsSelected = ref<Item[]>([]);

const dialog = ref(false);

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Iniciante':
      return 'success';
    case 'Intermediário':
      return 'warning';
    case 'Avançado':
      return 'error';
    default:
      return 'primary';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Ativo':
      return 'success';
    case 'Pausado':
      return 'warning';
    case 'Concluído':
      return 'primary';
    default:
      return 'secondary';
  }
};
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <v-row>
    <v-col cols="12" md="12">
      <v-card elevation="0" variant="outlined" class="bg-surface overflow-hidden" rounded="lg">
        <v-card-item>
          <v-row justify="space-between" class="align-center">
            <v-col cols="12" md="3">
              <v-text-field
                type="text"
                variant="outlined"
                persistent-placeholder
                placeholder="Buscar planos de estudo..."
                v-model="searchValue"
                density="comfortable"
                hide-details
              >
                <template v-slot:prepend-inner>
                  <SvgSprite name="custom-search" class="text-lightText" style="width: 14px; height: 14px" />
                </template>
              </v-text-field>
            </v-col>
            <v-col cols="12" md="3">
              <div class="d-flex ga-2 justify-end">
                <v-dialog v-model="dialog" class="studyplan-modal">
                  <template v-slot:activator="{ props }">
                    <v-btn variant="flat" color="primary" rounded="md" v-bind="props">
                      <template v-slot:prepend>
                        <SvgSprite name="custom-plus" style="width: 20px; height: 20px" />
                      </template>
                      Novo Plano
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title class="pa-5">
                      <span class="text-h5">Novo Plano de Estudo</span>
                    </v-card-title>
                    <v-divider></v-divider>
                    <v-card-text>
                      <p class="text-body-1 pa-4">Funcionalidade em desenvolvimento...</p>
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="grey" variant="text" @click="dialog = false">Fechar</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </div>
            </v-col>
          </v-row>
        </v-card-item>
        <v-divider></v-divider>
        <div class="overflow-hidden">
          <EasyDataTable
            :headers="headers"
            :items="items"
            :search-field="searchField"
            :search-value="searchValue"
            :theme-color="themeColor"
            :rows-per-page="10"
            table-class-name="customize-table"
            header-text-direction="center"
            body-text-direction="center"
            v-model:items-selected="itemsSelected"
          >
            <template #item-title="{ title, description }">
              <div class="d-flex align-center ga-3">
                <div>
                  <h6 class="text-h6 mb-1">{{ title }}</h6>
                  <span class="text-caption text-lightText">{{ description }}</span>
                </div>
              </div>
            </template>
            <template #item-difficulty="{ difficulty }">
              <v-chip :color="getDifficultyColor(difficulty)" size="small" variant="tonal">
                {{ difficulty }}
              </v-chip>
            </template>
            <template #item-progress="{ progress }">
              <div class="d-flex align-center ga-2">
                <v-progress-linear :model-value="progress" height="6" color="primary" rounded></v-progress-linear>
                <span class="text-caption">{{ progress }}%</span>
              </div>
            </template>
            <template #item-status="{ status }">
              <v-chip :color="getStatusColor(status)" size="small" variant="tonal">
                {{ status }}
              </v-chip>
            </template>
            <template #item-operation="{ id }">
              <div class="operation-wrapper">
                <v-tooltip location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn icon color="secondary" variant="text" v-bind="props" size="small">
                      <SvgSprite name="custom-eye" style="width: 16px; height: 16px" />
                    </v-btn>
                  </template>
                  <span>Visualizar</span>
                </v-tooltip>
                <v-tooltip location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn icon color="primary" variant="text" v-bind="props" size="small">
                      <SvgSprite name="custom-edit" style="width: 16px; height: 16px" />
                    </v-btn>
                  </template>
                  <span>Editar</span>
                </v-tooltip>
                <v-tooltip location="top">
                  <template v-slot:activator="{ props }">
                    <v-btn icon color="error" variant="text" v-bind="props" size="small" @click="deleteStudyPlan(id)">
                      <SvgSprite name="custom-trash" style="width: 16px; height: 16px" />
                    </v-btn>
                  </template>
                  <span>Excluir</span>
                </v-tooltip>
              </div>
            </template>
          </EasyDataTable>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.operation-wrapper {
  display: flex;
  gap: 4px;
}
</style>