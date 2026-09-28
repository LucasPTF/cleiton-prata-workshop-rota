import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const source = [
  'src/content.ts',
  'src/main.tsx',
  'src/styles.css',
  'index.html',
].map((file) => readFileSync(resolve(root, file), 'utf8')).join('\n')

const requiredRoutes = ['/a1', '/a2', '/a3', '/obrigado']
const requiredImages = [
  'cleiton-laboratorio.webp',
  'cleiton-prata.webp',
  'ceramica-processo.webp',
  'facetas-finalizadas.webp',
  'coroa-ceramica.webp',
]
const forbidden = [
  ['a con', 'firmar'].join(''),
  ['aguardando con', 'firmação'].join(''),
  ['será ati', 'vado'].join(''),
  ['após vali', 'dação da cliente'].join(''),
]

for (const route of requiredRoutes) {
  const key = route.replace('/', '')
  if (!source.includes(key)) throw new Error(`Rota ausente na fonte: ${route}`)
}

for (const image of requiredImages) {
  if (!existsSync(resolve(root, 'public/images', image))) throw new Error(`Imagem ausente: ${image}`)
}

for (const term of forbidden) {
  if (source.toLocaleLowerCase('pt-BR').includes(term)) throw new Error(`Nota interna encontrada: ${term}`)
}

if (source.includes('transition: all')) throw new Error('transition: all não é permitido')
if (!source.includes('prefers-reduced-motion')) throw new Error('prefers-reduced-motion ausente')

console.log('Validação do projeto concluída com sucesso.')
