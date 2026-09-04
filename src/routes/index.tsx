import { createFileRoute } from "@tanstack/react-router";

import terrarioMontagem from "@/assets/terrario-montagem.jpg.asset.json";
import terrarioPedras from "@/assets/terrario-pedras.jpg.asset.json";
import terrarioPronto from "@/assets/terrario-pronto.jpg.asset.json";
import filtroGarrafas from "@/assets/filtro-garrafas.jpg.asset.json";
import filtroBrita from "@/assets/filtro-brita.jpg.asset.json";
import filtroAreia from "@/assets/filtro-areia.jpg.asset.json";
import filtroAlgodao from "@/assets/filtro-algodao.jpg.asset.json";
import filtroPronto from "@/assets/filtro-pronto.jpg.asset.json";

const TITLE = "Projeto Integrador — Terrário e Filtro de Água | 1º ano A";
const DESCRIPTION =
  "Produto final do Projeto Integrador: terrário e filtro de água caseiro construídos pela turma do 1º ano A, unindo Matemática, Química e Tecnociência e Biologia.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const disciplinas = [
  {
    nome: "Matemática",
    sub: "Resolução de Problemas",
    texto:
      "Medidas de volume e proporção das camadas, cálculo do tempo de filtragem, registro de dados e comparação de resultados em tabelas.",
  },
  {
    nome: "Química",
    sub: "Tecnociência",
    texto:
      "Estudo da filtração como separação de misturas, adsorção pelo carvão, retenção de partículas pela areia e brita, e análise da água antes e depois.",
  },
  {
    nome: "Biologia",
    sub: "Sustentabilidade em Ação",
    texto:
      "Ciclo da água, equilíbrio de ecossistemas fechados, fotossíntese e reaproveitamento de materiais descartáveis no dia a dia da escola.",
  },
];

const etapasTerrario = [
  {
    n: "01",
    titulo: "Separação dos materiais",
    texto:
      "Reunimos potes de vidro e potes plásticos transparentes reaproveitados, pedras, areia, terra vegetal, carvão e mudas pequenas (suculentas e flores) coletadas na própria escola.",
    img: terrarioPedras.url,
    alt: "Estudantes segurando potes com pedras e terra para montar o terrário",
  },
  {
    n: "02",
    titulo: "Montagem das camadas",
    texto:
      "Camada de pedras no fundo para drenagem, carvão para evitar odores e fungos, e por cima areia e terra vegetal. As espessuras foram medidas para manter a proporção entre drenagem e substrato.",
    img: terrarioMontagem.url,
    alt: "Pote de vidro com camadas de terra, pedras e areia sendo montadas",
  },
  {
    n: "03",
    titulo: "Plantio e observação",
    texto:
      "Plantamos as mudas, regamos levemente e fechamos o recipiente. Nos dias seguintes observamos a condensação nas paredes: a água evapora, condensa e volta ao solo, formando um mini ciclo da água.",
    img: terrarioPronto.url,
    alt: "Terrário pronto em pote plástico com suculentas e flores vermelhas",
  },
];

const etapasFiltro = [
  {
    n: "01",
    titulo: "Preparo das garrafas PET",
    texto:
      "Duas garrafas PET foram lavadas e cortadas: uma serve de funil (invertida) e a outra de recipiente para receber a água já filtrada.",
    img: filtroGarrafas.url,
    alt: "Duas garrafas PET transparentes cortadas sobre a bancada do laboratório",
  },
  {
    n: "02",
    titulo: "Algodão: a primeira barreira",
    texto:
      "O algodão foi colocado no gargalo da garrafa invertida. Ele segura as partículas mais finas e impede que areia e carvão passem junto com a água.",
    img: filtroAlgodao.url,
    alt: "Garrafa PET invertida com algodão no gargalo",
  },
  {
    n: "03",
    titulo: "Areia e brita lavadas",
    texto:
      "Areia fina e brita foram lavadas várias vezes até a água sair limpa. A areia retém partículas médias; a brita, as maiores, e ainda dá sustentação às camadas.",
    img: filtroAreia.url,
    alt: "Pote com areia lavada usada no filtro",
  },
  {
    n: "04",
    titulo: "Carvão e montagem final",
    texto:
      "Empilhamos as camadas na ordem: algodão, areia, carvão e brita. O carvão faz a adsorção, retendo impurezas dissolvidas, odores e cor. A água suja despejada no topo desce lentamente e sai visivelmente mais limpa.",
    img: filtroPronto.url,
    alt: "Filtro de água caseiro montado em garrafa PET com camadas de carvão, areia e brita",
  },
];

const materiaisBrita = {
  img: filtroBrita.url,
  alt: "Pote com brita lavada usada como camada do filtro",
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <header className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-90"
          style={{ background: "var(--gradient-leaf)" }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-5xl px-6 py-20 text-primary-foreground sm:py-28">
          <div className="rounded-2xl border border-primary-foreground/25 bg-primary-foreground/10 p-6 backdrop-blur-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] opacity-90">
              Produto Final · Projeto Integrador
            </p>
            <h1 className="mt-5 font-display text-3xl leading-[1.15] sm:text-4xl">
              Água - Cada gota conta.
              <br />
              Questão Motriz:
              <br />
              <br />
              Se a água que usamos vai muito além do que vemos na torneira, como nossas escolhas de consumo impactam o planeta?
            </h1>
          </div>
          <p className="mt-8 font-display text-4xl leading-[1.05] sm:text-6xl">
            Ciência que cabe em um pote de vidro
            <span className="block opacity-90">e em uma garrafa PET</span>
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed opacity-95 sm:text-lg">
            Dois projetos construídos pela turma do 1º ano A: um{" "}
            <strong>terrário</strong>, ecossistema fechado que reproduz o ciclo da água, e um{" "}
            <strong>filtro de água caseiro</strong>, feito com materiais reaproveitados. Um trabalho
            que une Matemática, Química e Tecnociência e Biologia.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#terrario"
              className="rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              Ver o terrário
            </a>
            <a
              href="#filtro"
              className="rounded-full border border-current/40 px-6 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
            >
              Ver o filtro de água
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Disciplinas */}
        <section className="mx-auto max-w-5xl px-6 py-16 sm:py-20" aria-labelledby="disciplinas">
          <h2 id="disciplinas" className="text-3xl font-bold sm:text-4xl">
            Três disciplinas, um mesmo problema
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            O Projeto Integrador partiu de uma pergunta simples: como cuidar melhor da água e dos
            recursos naturais usando o que já temos em casa e na escola?
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {disciplinas.map((d) => (
              <article
                key={d.nome}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <h3 className="text-xl font-bold text-primary">{d.nome}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                  {d.sub}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Terrário */}
        <section id="terrario" className="bg-secondary/50 py-16 sm:py-24" aria-labelledby="t-titulo">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Projeto 01
            </p>
            <h2 id="t-titulo" className="mt-3 text-3xl font-bold sm:text-4xl">
              Terrário: um ecossistema em miniatura
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              O terrário é um ambiente fechado onde plantas, solo, água e luz se mantêm em
              equilíbrio. Ele funciona como uma maquete viva do planeta: mostra, em pequena escala,
              como a água circula e como os seres vivos dependem uns dos outros.
            </p>

            <ol className="mt-12 space-y-10">
              {etapasTerrario.map((e, i) => (
                <li
                  key={e.n}
                  className={`grid items-center gap-6 sm:grid-cols-2 ${i % 2 === 1 ? "sm:[&>figure]:order-last" : ""}`}
                >
                  <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
                    <img
                      src={e.img}
                      alt={e.alt}
                      loading="lazy"
                      className="h-72 w-full object-cover sm:h-80"
                    />
                  </figure>
                  <div>
                    <span className="font-display text-4xl font-bold text-primary/30">{e.n}</span>
                    <h3 className="mt-1 text-2xl font-bold">{e.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{e.texto}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-2xl border-l-4 border-primary bg-card p-7 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold">Por que isso importa</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                O terrário torna visível o que normalmente não enxergamos: a evaporação, a
                condensação e o retorno da água ao solo. Ele ensina que um ecossistema equilibrado
                se sustenta sozinho — e que pequenas mudanças, como excesso de água ou falta de luz,
                desregulam todo o conjunto. Além disso, foi construído com potes reaproveitados,
                mostrando na prática o que é sustentabilidade.
              </p>
            </div>
          </div>
        </section>

        {/* Filtro */}
        <section id="filtro" className="py-16 sm:py-24" aria-labelledby="f-titulo">
          <div className="mx-auto max-w-5xl px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-water">
              Projeto 02
            </p>
            <h2 id="f-titulo" className="mt-3 text-3xl font-bold sm:text-4xl">
              Filtro de água caseiro
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
              Com garrafas PET, algodão, areia, carvão e brita, montamos um filtro que separa as
              impurezas sólidas da água. Cada camada tem uma função diferente e a ordem em que são
              colocadas é o que faz o sistema funcionar.
            </p>

            <ol className="mt-12 grid gap-6 sm:grid-cols-2">
              {etapasFiltro.map((e) => (
                <li
                  key={e.n}
                  className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]"
                >
                  <img
                    src={e.img}
                    alt={e.alt}
                    loading="lazy"
                    className="h-64 w-full object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-water">
                      Etapa {e.n}
                    </span>
                    <h3 className="mt-2 text-xl font-bold">{e.titulo}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid items-center gap-6 rounded-2xl border border-border bg-secondary/50 p-6 sm:grid-cols-[220px_1fr]">
              <img
                src={materiaisBrita.img}
                alt={materiaisBrita.alt}
                loading="lazy"
                className="h-44 w-full rounded-xl object-cover"
              />
              <div>
                <h3 className="text-lg font-bold">Tudo lavado antes de usar</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Brita, areia e carvão foram lavados repetidas vezes. Se os materiais entrarem
                  sujos, eles próprios contaminam a água — um cuidado simples que mudou totalmente o
                  resultado do teste.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl border-l-4 border-water bg-card p-7 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold">Por que isso importa</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                O filtro mostra como funciona, de forma simplificada, o tratamento de água de uma
                estação. Ele deixa clara a diferença entre <strong>água limpa</strong> e{" "}
                <strong>água potável</strong>: a filtragem remove sólidos, cor e odor, mas não
                elimina micro-organismos — por isso a água filtrada assim não deve ser bebida sem
                fervura ou cloração. Em uma escola do campo, entender esse processo é entender de
                onde vem a água que usamos e por que preservá-la.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusão */}
        <section className="bg-secondary/50 py-16" aria-labelledby="conclusao">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 id="conclusao" className="text-3xl font-bold">
              O que aprendemos
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Construir com as próprias mãos transformou conteúdo de caderno em experiência. Medimos,
              erramos, refizemos e comparamos resultados. Descobrimos que resolver problemas reais
              exige matemática para calcular, química para explicar e biologia para entender as
              consequências — e que sustentabilidade começa com atitudes pequenas e possíveis.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-primary py-10 text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="font-display text-lg font-bold">1º ano A — Projeto Integrador</p>
          <p className="mt-2 text-sm opacity-90">
            Colégio Estadual do Campo de Alto São João — EFM/TI
          </p>
        </div>
      </footer>
    </div>
  );
}
