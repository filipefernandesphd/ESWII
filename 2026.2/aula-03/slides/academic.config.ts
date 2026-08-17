/**
 * Informações acadêmicas compartilhadas pela capa e pelo rodapé.
 *
 * Edite somente este objeto ao reutilizar o template para outra apresentação.
 */
export interface AcademicPresentation {
  courseName: string
  subjectName: string
  subjectAcronym: string
  subjectCode: string
  professorName: string
  professorContact: string
  presentationTitle: string
}

export const academicConfig = {
  courseName: 'Bacharelado em Sistemas de Informação',
  subjectName: 'Engenharia de Software II',
  subjectAcronym: 'ESWII',
  subjectCode: 'INF03086',
  professorName: 'Filipe Fernandes, PhD',
  professorContact: 'filipe.fernandes@ifsudestemg.edu.br',
  presentationTitle: 'Code Smells',
} satisfies AcademicPresentation
