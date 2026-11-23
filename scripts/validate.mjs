import { readFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import assert from 'node:assert/strict'
import { getRegistration } from '../src/registration.ts'

const root = resolve(import.meta.dirname, '..')
const source = [
  'src/content.ts',
  'src/registration.ts',
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
const restrictedBrand = ['exo', 'cad'].join('')
if (source.toLocaleLowerCase('pt-BR').includes(restrictedBrand)) {
  throw new Error('Referência à marca de software encontrada')
}

for (const lot of ['Lote 1', 'Lote 2', 'Lote 3', 'R$ 47', 'R$ 97', 'R$ 147']) {
  if (!source.includes(lot)) throw new Error(`Lote ou preço ausente: ${lot}`)
}

for (const [time, expected] of [
  ['2026-11-22T23:59:59.999-03:00', 'upcoming'],
  ['2026-11-23T00:00:00-03:00', 'Lote 1'],
  ['2026-12-02T23:59:59.999-03:00', 'Lote 1'],
  ['2026-12-03T00:00:00-03:00', 'Lote 2'],
  ['2026-12-07T23:59:59.999-03:00', 'Lote 2'],
  ['2026-12-08T00:00:00-03:00', 'Lote 3'],
  ['2026-12-12T23:59:59.999-03:00', 'Lote 3'],
  ['2026-12-13T00:00:00-03:00', 'closed'],
]) {
  const state = getRegistration(Date.parse(time))
  assert.equal(state.status === 'open' ? state.lot.name : state.status, expected, time)
}
assert.ok(!source.includes('bid=1789599580879'), 'Checkout antigo ainda presente')
if (source.includes('Date.now() +') || source.includes('window.localStorage')) {
  throw new Error('O prazo do lote não pode ser reiniciado por visitante')
}
for (const term of [
  ['Plano de ', '30 dias'].join(''),
  ['próximos ', '30 dias'].join(''),
  ['Agenda de Prática ', 'por 30 Dias'].join(''),
  ['Checkout ', '— complementos opcionais'].join(''),
]) {
  if (source.includes(term)) throw new Error(`Texto substituído encontrado: ${term}`)
}
if ((readFileSync(resolve(root, 'src/main.tsx'), 'utf8').match(/sharedCopy\.authority\.proof/g) ?? []).length !== 1) {
  throw new Error('A prova do workshop deve aparecer uma única vez')
}

console.log('Validação do projeto concluída com sucesso.')
