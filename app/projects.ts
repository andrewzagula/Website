export type ProjectAction = {
  kind: 'source' | 'website';
  label: string;
  href?: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  actions: ProjectAction[];
};

export const projects: Project[] = [
  {
    title: 'PaperTrail',
    description: 'Agentic AI research assistant exploring arXiv to answer and implement research questions',
    tech: ['Python', 'TypeScript', 'FastAPI', 'Next.js', 'React', 'OpenAI API', 'LangGraph', 'LangChain', 'ChromaDB', 'SQLite', 'SQLAlchemy', 'Tailwind CSS', 'Pydantic'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/PaperTrail' },
    ],
  },
  {
    title: 'Rewind',
    description: 'AI-native research backtesting platform for simulating trading strategy performance',
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'OpenAI API', 'DuckDB', 'PostgreSQL', 'Redis', 'Polars', 'NumPy', 'Plotly', 'SQLAlchemy', 'Pydantic', 'Tailwind CSS', 'Docker'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/andrewzagula/Rewind' },
    ],
  },
  {
    title: 'AutoAdv',
    description: 'Automated adversarial prompting pipeline for multi-turn LLM jailbreaking',
    tech: ['Python', 'OpenAI API', 'Together AI API', 'xAI API'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AAN-AutoAdv/AutoAdv' },
    ],
  },
  {
    title: 'AUDIT',
    description: 'RAG-powered CLI tool scanning local repositories for security vulnerabilities',
    tech: ['Python', 'Typer', 'Pydantic', 'OpenAI API', 'SQLite', 'ChromaDB', 'PyInstaller', 'Node.js', 'npm'],
    actions: [
      { kind: 'source', label: 'Source', href: 'https://github.com/AryaVaidya08/AUDIT' },
    ],
  },
];
