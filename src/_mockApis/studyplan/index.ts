import mock from '../mockAdapter';
// types
import type { StudyPlan } from '@/types/studyplan/index';

const studyplans: StudyPlan[] = [
  {
    id: 'SP001',
    title: 'Matemática Básica',
    description: 'Plano de estudo completo para fundamentos matemáticos',
    subject: 'Matemática',
    duration: '8 semanas',
    difficulty: 'Iniciante',
    instructor: 'Prof. Ana Silva',
    students: 45,
    progress: 75,
    status: 'Ativo',
    createdDate: '2024-01-15',
    startDate: '2024-02-01',
    endDate: '2024-03-31',
    topics: ['Aritmética', 'Frações', 'Geometria Básica', 'Álgebra Introdutória'],
    category: 'Exatas'
  },
  {
    id: 'SP002',
    title: 'Português Fundamental',
    description: 'Desenvolvimento de habilidades de leitura e escrita',
    subject: 'Português',
    duration: '10 semanas',
    difficulty: 'Intermediário',
    instructor: 'Prof. Carlos Mendes',
    students: 32,
    progress: 60,
    status: 'Ativo',
    createdDate: '2024-01-20',
    startDate: '2024-02-05',
    endDate: '2024-04-15',
    topics: ['Gramática', 'Redação', 'Literatura', 'Interpretação de Texto'],
    category: 'Humanas'
  },
  {
    id: 'SP003',
    title: 'Ciências Naturais',
    description: 'Exploração dos fenômenos naturais e científicos',
    subject: 'Ciências',
    duration: '12 semanas',
    difficulty: 'Intermediário',
    instructor: 'Prof. Maria Santos',
    students: 28,
    progress: 40,
    status: 'Ativo',
    createdDate: '2024-02-01',
    startDate: '2024-02-15',
    endDate: '2024-05-10',
    topics: ['Biologia', 'Química', 'Física', 'Meio Ambiente'],
    category: 'Ciências'
  },
  {
    id: 'SP004',
    title: 'História do Brasil',
    description: 'Cronologia e análise da formação histórica brasileira',
    subject: 'História',
    duration: '6 semanas',
    difficulty: 'Avançado',
    instructor: 'Prof. João Oliveira',
    students: 15,
    progress: 90,
    status: 'Concluído',
    createdDate: '2023-11-10',
    startDate: '2023-12-01',
    endDate: '2024-01-15',
    topics: ['Brasil Colônia', 'Império', 'República', 'História Contemporânea'],
    category: 'Humanas'
  },
  {
    id: 'SP005',
    title: 'Inglês Básico',
    description: 'Introdução ao idioma inglês para iniciantes',
    subject: 'Inglês',
    duration: '16 semanas',
    difficulty: 'Iniciante',
    instructor: 'Prof. Laura Johnson',
    students: 52,
    progress: 25,
    status: 'Ativo',
    createdDate: '2024-02-10',
    startDate: '2024-03-01',
    endDate: '2024-06-20',
    topics: ['Vocabulário Básico', 'Gramática Elementar', 'Conversação', 'Pronúncia'],
    category: 'Idiomas'
  },
  {
    id: 'SP006',
    title: 'Programação Python',
    description: 'Desenvolvimento de habilidades de programação em Python',
    subject: 'Informática',
    duration: '14 semanas',
    difficulty: 'Intermediário',
    instructor: 'Prof. Ricardo Tech',
    students: 38,
    progress: 55,
    status: 'Ativo',
    createdDate: '2024-01-25',
    startDate: '2024-02-10',
    endDate: '2024-05-25',
    topics: ['Sintaxe Python', 'Estruturas de Dados', 'Algoritmos', 'Projetos Práticos'],
    category: 'Tecnologia'
  },
  {
    id: 'SP007',
    title: 'Física Moderna',
    description: 'Conceitos avançados de física contemporânea',
    subject: 'Física',
    duration: '10 semanas',
    difficulty: 'Avançado',
    instructor: 'Prof. Einstein Rocha',
    students: 12,
    progress: 0,
    status: 'Pausado',
    createdDate: '2024-02-05',
    startDate: '2024-04-01',
    endDate: '2024-06-10',
    topics: ['Mecânica Quântica', 'Relatividade', 'Física de Partículas', 'Cosmologia'],
    category: 'Exatas'
  },
  {
    id: 'SP008',
    title: 'Arte e Cultura',
    description: 'Apreciação e análise de manifestações artísticas',
    subject: 'Artes',
    duration: '8 semanas',
    difficulty: 'Iniciante',
    instructor: 'Prof. Beatriz Arte',
    students: 22,
    progress: 80,
    status: 'Ativo',
    createdDate: '2024-01-30',
    startDate: '2024-02-20',
    endDate: '2024-04-15',
    topics: ['História da Arte', 'Pintura', 'Escultura', 'Arte Contemporânea'],
    category: 'Artes'
  }
];

mock.onGet('/api/data/studyplans').reply(() => {
  return [200, studyplans];
});

export { studyplans };