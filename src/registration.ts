export const registrationOpens = Date.parse('2026-11-23T00:00:00-03:00')

export const lots = [
  { name: 'Lote 1', price: 'R$ 47', endDate: '2026-12-02', endLabel: '2 de dezembro de 2026, às 23h59 (horário de Brasília)', endsAt: Date.parse('2026-12-03T00:00:00-03:00'), url: 'https://pay.hotmart.com/S107483590M?off=ta61z7e7' },
  { name: 'Lote 2', price: 'R$ 97', endDate: '2026-12-07', endLabel: '7 de dezembro de 2026, às 23h59 (horário de Brasília)', endsAt: Date.parse('2026-12-08T00:00:00-03:00'), url: 'https://pay.hotmart.com/S107483590M?off=3tr52ae3' },
  { name: 'Lote 3', price: 'R$ 147', endDate: '2026-12-12', endLabel: '12 de dezembro de 2026, às 23h59 (horário de Brasília)', endsAt: Date.parse('2026-12-13T00:00:00-03:00'), url: 'https://pay.hotmart.com/S107483590M?off=1z4wxo67' },
] as const

export type Lot = (typeof lots)[number]

export function getRegistration(now: number) {
  if (now < registrationOpens) return { status: 'upcoming' } as const
  const lot = lots.find(({ endsAt }) => now < endsAt)
  return lot ? { status: 'open', lot } as const : { status: 'closed' } as const
}

export const groupUrl = 'https://chat.whatsapp.com/JTvTI3EkiiJ28MqcApNTzd?s=sw&p=i&mlu=4&ilr=4'
