export interface StudyPlanStateProps {
  studyplans: StudyPlan[];
  error?: object | string | null;
}

export type StudyPlan = {
  id: string;
  title: string;
  description: string;
  subject: string;
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  instructor: string;
  students: number;
  progress: number;
  status: 'Ativo' | 'Pausado' | 'Concluído';
  createdDate: string;
  startDate: string;
  endDate: string;
  topics: string[];
  category: string;
};