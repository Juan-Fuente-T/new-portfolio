import type { LucideIcon } from 'lucide-react';
import { Github, Linkedin, Mail, PlayCircle, ExternalLink, Code, Eye } from 'lucide-react';

export const profile = {
  name: "Juan Fuente",
  title: "Full-Stack Developer | Java & Blockchain Specialist",
  bio: "Desarrollo soluciones robustas y escalables desde el concepto hasta la producción. Especializado en arquitecturas backend con Spring Boot y aplicaciones descentralizadas en Ethereum. Mi enfoque combina rigor técnico con pragmatismo: cada línea de código resuelve un problema real.",
  email: "jfuentet@gmail.com",
  links: [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/juan-fuente-talavera/", icon: Linkedin },
    { name: "GitHub", url: "https://github.com/juanfuente", icon: Github },
  ],
};

export const skills = [
  {
    category: "Backend",
    technologies: ["Java 21", "Spring Boot", "Spring Security", "Spring Data JPA", "Hibernate", "Groovy"],
  },
  {
    category: "Frontend",
    technologies: ["React", "Svelte", "TypeScript", "JavaScript", "HTML5", "CSS3", "TailwindCSS", "Shadcn UI"],
  },
  {
    category: "Blockchain",
    technologies: ["Solidity", "Hardhat", "Ethers.js", "UUPS Proxy Pattern", "IPFS"],
  },
  {
    category: "Bases de Datos",
    technologies: ["PostgreSQL", "H2", "Supabase"],
  },
  {
    category: "Infraestructura & DevOps",
    technologies: ["Docker", "Docker Compose", "Git", "AWS", "RunCloud", "Netlify", "Vercel", "Nginx", "LiteSpeed"],
  },
  {
    category: "Testing & Quality",
    technologies: ["Foundry (>90% cobertura)", "Spring Test", "JUnit"],
  },
];

type ProjectLink = {
  label: 'Demo en vivo' | 'Ver código' | 'Probar en vivo' | 'Ver en portafolio';
  url: string;
};

export type Project = {
  title: string;
  role: string;
  description: string;
  keyPoints: string[];
  technologies: string[];
  status: { text: string; emoji: '✅' | '🟡' };
  links: ProjectLink[];
};

export const projects: Project[] = [
  {
    title: "BORME Data Processor",
    role: "Desarrollador Full-Stack (Prueba Técnica)",
    description: "Sistema que extrae, procesa y expone datos de constituciones de empresas publicadas en el Boletín Oficial del Registro Mercantil. Operación de espectro completo desde la automatización del scraping hasta API REST segura e interfaz interactiva.",
    keyPoints: [
      "Scraper automatizado que descarga y procesa selectivamente documentos PDF desde boe.es.",
      "Arquitectura en capas (Controller → Service → Repository) con separación clara de responsabilidades.",
      "Autenticación HTTP Basic con Spring Security en modo stateless.",
      "Endpoints avanzados: búsqueda multi-campo, paginación, ordenación, y proxy de PDFs.",
      "Manejo centralizado de errores con GlobalExceptionHandler.",
      "Interfaz Svelte 5 con dashboard en tiempo real y visor integrado de PDF.",
    ],
    technologies: ["Java", "Spring Boot", "Groovy", "PostgreSQL/H2", "Svelte 5", "TypeScript", "Docker", "RunCloud", "Netlify", "Jsoup", "Flyway"],
    status: { text: "Operacional en producción", emoji: '✅' },
    links: [
      { label: "Demo en vivo", url: "https://borme-data.juanfuente.dev/" },
      { label: "Ver código", url: "https://github.com/juanfuente/borme-data-extractor" },
    ],
  },
  {
    title: "FoodyMarket",
    role: "Desarrollador Full-Stack",
    description: "Plataforma que conecta clientes con restaurantes locales. Incluye sistema de pedidos, gestión de productos, autenticación JWT basada en roles y despliegue en producción.",
    keyPoints: [
      "Backend con Spring Boot 3.x, seguridad basada en roles (CLIENTE/RESTAURANTE).",
      "Autenticación JWT stateless con refresh tokens.",
      "Optimización de consultas: resolución de N+1 con JOIN FETCH y @EntityGraph.",
      "Gestión de precisión monetaria con BigDecimal.",
      "Arquitectura monorepo (backend en Render, frontend en Vercel).",
      "Dashboard administrativo para gestión de productos, categorías y pedidos.",
    ],
    technologies: ["Java 21", "Spring Boot 3.x", "Spring Security 6.x", "PostgreSQL (Supabase)", "React", "TypeScript", "Vite", "TailwindCSS", "Shadcn UI", "Render", "Vercel"],
    status: { text: "Desplegado", emoji: '✅' },
    links: [
      { label: "Demo en vivo", url: "https://foody-market.vercel.app/" },
      { label: "Ver código", url: "https://github.com/juanfuente/foody-market-monorepo" },
    ],
  },
  {
    title: "Money Bank Escrow",
    role: "Desarrollador Full-Stack Blockchain",
    description: "Aplicación descentralizada P2P construida en Sepolia (testnet Ethereum) para intercambiar tokens ERC20 de forma segura. Implementa escrow basado en smart contracts, eliminando intermediarios y riesgos de contraparte.",
    keyPoints: [
      "Smart contracts con lógica de escrow: bloqueo de fondos hasta aceptación o cancelación.",
      "Intercambio atómico sin race conditions: transacción simultánea de fondos en una sola operación.",
      "Firma de transacciones con signMessage y nonces únicos para autorización segura.",
      "Patrón Checks-Effects-Interactions para mitigar vulnerabilidades comunes en Solidity.",
      "Faucet on-chain para obtener USDT de prueba facilitando testeo.",
      "Wagmi y RainbowKit para experiencia fluida de conexión multi-wallet.",
    ],
    technologies: ["Solidity", "Foundry", "React", "TypeScript", "Wagmi", "RainbowKit", "Ethers.js", "Viem", "Sepolia Testnet"],
    status: { text: "Desplegado y funcional", emoji: '✅' },
    links: [
      { label: "Probar en vivo", url: "https://money-bank-escrow-dapp.vercel.app/" },
      { label: "Ver código", url: "https://github.com/juanfuente/money-bank-escrow" },
    ],
  },
  {
    title: "GardenTech Marketplace",
    role: "Desarrollador Full-Stack Blockchain",
    description: "Aplicación descentralizada en Sepolia (testnet Ethereum) que funciona como marketplace para crear, vender y comprar NFTs. Implementa almacenamiento descentralizado con IPFS y patrón UUPS Proxy para actualización de smart contracts sin perder estado.",
    keyPoints: [
      "Smart contracts en Solidity con patrón UUPS Proxy para actualizaciones manteniendo estado.",
      "Cobertura de tests >90% con Foundry (contrato principal >99%).",
      "Almacenamiento descentralizado de imágenes y metadatos en IPFS (Pinata).",
      "Ciclo de vida completo de NFTs: minting, listing, compra, reventa.",
      "Integración con Metamask para conexión de wallets.",
      "Gestión de permisos: solo propietarios pueden modificar precios o retirar del mercado.",
    ],
    technologies: ["Solidity", "Hardhat", "Foundry", "Ethers.js", "React", "JavaScript", "TailwindCSS", "IPFS", "Sepolia Testnet"],
    status: { text: "Funcional", emoji: '✅' },
    links: [
      { label: "Ver en portafolio", url: "#" },
      { label: "Ver código", url: "https://github.com/juanfuente/gardentech-marketplace-dapp" },
    ],
  },
  {
    title: "Business Card MVP",
    role: "Desarrollador Full-Stack Blockchain",
    description: "Prototipo funcional que explora blockchain y NFTs interactivos para gestión segura de perfiles profesionales. Permite a usuarios conectar perfiles a través de NFT único, compartiendo información privada solo con contactos autorizados.",
    keyPoints: [
      "NFT como identidad digital: mantiene control total de datos del usuario.",
      "Gestión segura de contactos mediante transacciones blockchain.",
      "Interfaz intuitiva para interactuar con blockchain sin fricción.",
      "RainbowKit para integración multi-wallet.",
      "Almacenamiento IPFS para metadatos de NFTs.",
    ],
    technologies: ["React", "TypeScript", "TailwindCSS", "RainbowKit", "Wagmi", "Ethers.js", "Viem", "Solidity", "Foundry", "IPFS", "Arbitrum Testnet"],
    status: { text: "Prototipo desplegado", emoji: '🟡' },
    links: [
      { label: "Ver código", url: "https://github.com/juanfuente/business-card-mvp" },
    ],
  },
];

export const philosophy = {
  title: "Filosofía de Desarrollo",
  intro: "No escribo código por escribir. Cada proyecto nace de un problema específico: desde automatizar el procesamiento de datos públicos hasta crear marketplaces funcionales o explorar las posibilidades de blockchain.",
  methodology: [
    { title: "Especificación clara antes de implementación", description: "Entiendo el problema antes de codificar." },
    { title: "Arquitectura escalable", description: "Código organizado que soporta cambios futuros." },
    { title: "Testing como herramienta", description: "No para cumplir métricas, sino para garantizar confianza." },
    { title: "Pragmatismo técnico", description: "Elijo herramientas que resuelvan el problema, no modas." },
    { title: "Aprendizaje continuo", description: "Cada reto es una oportunidad para profundizar." },
  ]
};

export const contact = {
  title: "Contacto",
  intro: "¿Proyecto interesante? Estoy disponible para:",
  services: [
    "Desarrollos backend robustos con Spring Boot",
    "Aplicaciones full-stack (Java + React/Svelte)",
    "Smart contracts y DApps en Ethereum",
    "Consultoría técnica y arquitectura de sistemas",
  ],
  outro: "Conecta conmigo en LinkedIn, explora mi GitHub, o escríbeme a",
};

export const linkIcons: { [key: string]: LucideIcon } = {
  'Demo en vivo': PlayCircle,
  'Ver código': Code,
  'Probar en vivo': PlayCircle,
  'Ver en portafolio': Eye,
  'default': ExternalLink,
};
