(() => {
  'use strict';

  const languageKey = 'vulquim-language';
  const languages = ['pt-BR', 'en', 'es', 'zh-CN', 'ja'];
  const localeMap = { 'pt-BR': 'pt_BR', en: 'en_US', es: 'es_ES', 'zh-CN': 'zh_CN', ja: 'ja_JP' };

  const tr = (pt, en, es, zh, ja) => ({ 'pt-BR': pt, en, es, 'zh-CN': zh, ja });

  const common = {
    skip: tr('Ir para o conteúdo', 'Skip to content', 'Saltar al contenido', '跳转到内容', '本文へ移動'),
    brandHome: tr('Vulquim, início', 'Vulquim, home', 'Vulquim, inicio', 'Vulquim，首页', 'Vulquim、ホーム'),
    brandBack: tr('Vulquim, voltar ao início', 'Vulquim, back to home', 'Vulquim, volver al inicio', 'Vulquim，返回首页', 'Vulquim、ホームに戻る'),
    menuOpen: tr('Abrir menu', 'Open menu', 'Abrir menú', '打开菜单', 'メニューを開く'),
    menuClose: tr('Fechar menu', 'Close menu', 'Cerrar menú', '关闭菜单', 'メニューを閉じる'),
    navigation: tr('Navegação principal', 'Main navigation', 'Navegación principal', '主导航', 'メインナビゲーション'),
    navEssence: tr('A Vulquim', 'Vulquim', 'Vulquim', 'Vulquim', 'Vulquim'),
    navCreate: tr('O que criamos', 'What we create', 'Lo que creamos', '我们创造的产品', 'つくっているもの'),
    navThink: tr('Como pensamos', 'How we think', 'Cómo pensamos', '我们的思考方式', '考え方'),
    projects: tr('Projetos em desenvolvimento', 'Projects in development', 'Proyectos en desarrollo', '开发中的项目', '開発中のプロジェクト'),
    kervaNav: tr('finanças em construção', 'finances in progress', 'finanzas en construcción', '财务建设中', '構築中の財務'),
    handosNav: tr('operação no ritmo certo', 'operations at the right pace', 'operación al ritmo justo', '以合适节奏运营', 'ちょうどいいリズムの運用'),
    language: tr('Idioma', 'Language', 'Idioma', '语言', '言語'),
    languageAria: tr('Selecionar idioma', 'Select language', 'Seleccionar idioma', '选择语言', '言語を選択'),
    backToProjects: tr('Voltar para o que criamos', 'Back to what we create', 'Volver a lo que creamos', '返回我们创造的产品', 'つくっているものに戻る')
  };

  const home = {
    title: tr('Vulquim | Tecnologia que constrói o amanhã', 'Vulquim | Technology that builds tomorrow', 'Vulquim | Tecnología que construye el mañana', 'Vulquim | 构筑明天的技术', 'Vulquim | 明日をつくるテクノロジー'),
    descriptionMeta: tr(
      'Vulquim: desenvolvimento de software mobile e SaaS. Criação, técnica e objetividade para transformar ideias em soluções digitais.',
      'Vulquim: mobile and SaaS software development. Creation, technique and clarity to turn ideas into digital solutions.',
      'Vulquim: desarrollo de software móvil y SaaS. Creación, técnica y objetividad para transformar ideas en soluciones digitales.',
      'Vulquim：移动端和 SaaS 软件开发。以创造、技术和清晰度，将想法转化为数字解决方案。',
      'Vulquim：モバイルとSaaSのソフトウェア開発。創造力と技術、明快さでアイデアをデジタルな解決策へ。'
    ),
    ogDescription: tr(
      'Desenvolvimento de software mobile e SaaS. Da vontade de criar à construção de soluções digitais.',
      'Mobile and SaaS software development. From the will to create to the building of digital solutions.',
      'Desarrollo de software móvil y SaaS. Del deseo de crear a la construcción de soluciones digitales.',
      '移动端和 SaaS 软件开发。从创造的愿望，到数字解决方案的构建。',
      'モバイルとSaaSのソフトウェア開発。つくりたいという思いから、デジタルな解決策の構築へ。'
    ),
    eyebrow: tr('IDEIAS EM CONSTRUÇÃO', 'IDEAS UNDER CONSTRUCTION', 'IDEAS EN CONSTRUCCIÓN', '构建中的想法', '構築中のアイデア'),
    heroTitle: tr('Tecnologia<br>que constrói<br>o <span>amanhã.</span>', 'Technology<br>that builds<br><span>tomorrow.</span>', 'Tecnología<br>que construye<br><span>el mañana.</span>', '技术<br>构筑<br><span>明天。</span>', 'テクノロジーで<br>明日を<br><span>つくる。</span>'),
    heroDescription: tr(
      'Desenvolvemos software mobile e SaaS que transforma necessidades reais em soluções para o dia a dia.',
      'We develop mobile and SaaS software that turns real needs into everyday solutions.',
      'Desarrollamos software móvil y SaaS que transforma necesidades reales en soluciones para el día a día.',
      '我们开发移动端和 SaaS 软件，将真实需求转化为日常解决方案。',
      '現実のニーズを日々の解決策へ変える、モバイルとSaaSのソフトウェアを開発しています。'
    ),
    createButton: tr('Conheça o que criamos', 'Discover what we create', 'Conoce lo que creamos', '了解我们创造的产品', 'つくっているものを見る'),
    essenceLink: tr('A essência da Vulquim', 'The essence of Vulquim', 'La esencia de Vulquim', 'Vulquim 的本质', 'Vulquimの本質'),
    flameAlt: tr(
      'Símbolo da Vulquim: uma chama vermelha formada por fitas entrelaçadas e conexões de circuitos.',
      'Vulquim symbol: a red flame made of interwoven ribbons and circuit connections.',
      'Símbolo de Vulquim: una llama roja formada por cintas entrelazadas y conexiones de circuitos.',
      'Vulquim 标志：由交织丝带和电路连接组成的红色火焰。',
      'Vulquimのシンボル：絡み合うリボンと回路のつながりでできた赤い炎。'
    ),
    motion: tr('A marca em movimento', 'The brand in motion', 'La marca en movimiento', '动态品牌', '動くブランド'),
    watch: tr('Assista à animação', 'Watch the animation', 'Mira la animación', '观看动画', 'アニメーションを見る'),
    heroBottom: tr('CRIAÇÃO <span aria-hidden="true">/</span> TÉCNICA <span aria-hidden="true">/</span> TRANSFORMAÇÃO', 'CREATION <span aria-hidden="true">/</span> TECHNIQUE <span aria-hidden="true">/</span> TRANSFORMATION', 'CREACIÓN <span aria-hidden="true">/</span> TÉCNICA <span aria-hidden="true">/</span> TRANSFORMACIÓN', '创造 <span aria-hidden="true">/</span> 技术 <span aria-hidden="true">/</span> 转化', '創造 <span aria-hidden="true">/</span> 技術 <span aria-hidden="true">/</span> 変革'),
    explore: tr('Explore o que criamos', 'Explore what we create', 'Explora lo que creamos', '探索我们创造的产品', 'つくっているものを見る'),
    exploreText: tr('EXPLORE', 'EXPLORE', 'EXPLORAR', '探索', '見る'),
    servicesLabel: tr('O QUE CRIAMOS', 'WHAT WE CREATE', 'LO QUE CREAMOS', '我们创造的产品', 'つくっているもの'),
    servicesTitle: tr('Da ideia à vida real.<br><span>É aqui que acontece.</span>', 'From idea to real life.<br><span>This is where it happens.</span>', 'De la idea a la vida real.<br><span>Aquí es donde sucede.</span>', '从想法到现实。<br><span>一切在这里发生。</span>', 'アイデアを現実へ。<br><span>ここから始まる。</span>'),
    servicesIntro: tr('Tecnologia ganha sentido quando resolve uma necessidade. Construímos a partir dela, com clareza sobre o que cada solução precisa fazer.', 'Technology gains meaning when it solves a need. We build from that need, with clarity about what each solution must do.', 'La tecnología cobra sentido cuando resuelve una necesidad. Construimos a partir de ella, con claridad sobre lo que cada solución debe hacer.', '技术只有解决需求时才有意义。我们从需求出发，清晰地构建每个解决方案应完成的事情。', 'テクノロジーはニーズを解決してこそ意味を持ちます。必要なことを明確にし、それを起点に構築します。'),
    mobileCategory: tr('NA PALMA DA MÃO', 'IN THE PALM OF YOUR HAND', 'EN LA PALMA DE LA MANO', '掌中', '手のひらに'),
    mobileTitle: tr('Aplicativos<br>mobile.', 'Mobile<br>apps.', 'Aplicaciones<br>móviles.', '移动<br>应用。', 'モバイル<br>アプリ。'),
    mobileDescription: tr('Software que acompanha as pessoas. Aplicativos voltados a facilitar tarefas, organizar rotinas e tornar o dia a dia mais prático.', 'Software that stays with people. Apps designed to simplify tasks, organize routines and make everyday life more practical.', 'Software que acompaña a las personas. Aplicaciones pensadas para facilitar tareas, organizar rutinas y hacer más práctico el día a día.', '陪伴人们的软件。旨在简化任务、整理日常并让生活更便捷的应用。', '人に寄り添うソフトウェア。タスクを簡単にし、日常を整え、毎日をもっと実用的にするアプリ。'),
    mobileFoot: tr('Funcionalidade em cada toque', 'Functionality in every tap', 'Funcionalidad en cada toque', '每一次点击都更实用', 'タップごとに機能を'),
    saasCategory: tr('CONECTADO AO SEU NEGÓCIO', 'CONNECTED TO YOUR BUSINESS', 'CONECTADO A TU NEGOCIO', '连接你的业务', 'ビジネスにつながる'),
    saasTitle: tr('Plataformas<br>SaaS.', 'SaaS<br>platforms.', 'Plataformas<br>SaaS.', 'SaaS<br>平台。', 'SaaS<br>プラットフォーム。'),
    saasDescription: tr('Soluções acessíveis pela web para organizar processos e conectar informações. Software pensado para acompanhar a evolução de cada negócio.', 'Web-based solutions to organize processes and connect information. Software designed to grow with every business.', 'Soluciones accesibles desde la web para organizar procesos y conectar información. Software pensado para acompañar la evolución de cada negocio.', '通过网络访问的解决方案，用于整理流程和连接信息。与每个业务共同成长的软件。', 'プロセスを整え、情報をつなぐWebソリューション。ビジネスの成長に寄り添うソフトウェア。'),
    saasFoot: tr('Mais clareza para cada processo', 'More clarity for every process', 'Más claridad para cada proceso', '让每个流程更清晰', 'すべてのプロセスをもっと明快に'),
    essenceLabel: tr('A ESSÊNCIA DA VULQUIM', 'THE ESSENCE OF VULQUIM', 'LA ESENCIA DE VULQUIM', 'VULQUIM 的本质', 'VULQUIMの本質'),
    essenceTitle: tr('Criação é parte<br>do nosso nome.', 'Creation is part<br>of our name.', 'Crear es parte<br>de nuestro nombre.', '创造是我们<br>名字的一部分。', '創造は<br>名前の一部。'),
    essenceIntro: tr('Duas origens se encontram.<br>Uma vontade de construir nasce.', 'Two origins meet.<br>A desire to build is born.', 'Dos orígenes se encuentran.<br>Nace el deseo de construir.', '两个源头相遇。<br>构建的愿望由此诞生。', '二つの起源が出会う。<br>つくりたい思いが生まれる。'),
    nameAria: tr('VUL, de Vulcano, mais QUIM, de Musquim', 'VUL, from Vulcano, plus QUIM, from Musquim', 'VUL, de Vulcano, más QUIM, de Musquim', 'VUL，来自 Vulcano，加上 QUIM，来自 Musquim', 'VUL（Vulcano）とQUIM（Musquim）'),
    vulName: tr('VUL<span>DE VULCANO</span>', 'VUL<span>FROM VULCANO</span>', 'VUL<span>DE VULCANO</span>', 'VUL<span>来自 VULCANO</span>', 'VUL<span>VULCANOから</span>'),
    quimName: tr('QUIM<span>DE MUSQUIM</span>', 'QUIM<span>FROM MUSQUIM</span>', 'QUIM<span>DE MUSQUIM</span>', 'QUIM<span>来自 MUSQUIM</span>', 'QUIM<span>MUSQUIMから</span>'),
    originOneTitle: tr('O fogo que transforma.', 'The fire that transforms.', 'El fuego que transforma.', '改变一切的火焰。', '変える火。'),
    originOne: tr('Vulcano, deus romano do fogo e das forjas, inspira a energia criativa da Vulquim. A transformação da matéria em algo novo, guiada pela técnica e pela imaginação.', 'Vulcano, Roman god of fire and the forge, inspires Vulquim’s creative energy. Matter becomes something new, guided by technique and imagination.', 'Vulcano, dios romano del fuego y las forjas, inspira la energía creativa de Vulquim. La materia se transforma en algo nuevo, guiada por la técnica y la imaginación.', 'Vulcano 是罗马的火与锻造之神，启发 Vulquim 的创造力。技术与想象力引导物质成为全新的事物。', '火と鍛冶のローマ神Vulcanoは、Vulquimの創造力にインスピレーションを与えます。技術と想像力に導かれ、物質は新しいものへ変わります。'),
    originTwoTitle: tr('Uma assinatura pessoal.', 'A personal signature.', 'Una firma personal.', '个人印记。', '個人的な署名。'),
    originTwo: tr('Musquim, sobrenome do Marcelo (Responsável pela Vulquim), dá origem à segunda parte do nome. É a conexão da marca com sua história e com quem deu o primeiro passo para criá-la.', 'Musquim, Marcelo’s surname (the person responsible for Vulquim), gives the name its second half. It connects the brand to its history and to the person who took the first step to create it.', 'Musquim, apellido de Marcelo (responsable de Vulquim), da origen a la segunda parte del nombre. Es la conexión de la marca con su historia y con quien dio el primer paso para crearla.', 'Musquim 是 Marcelo（Vulquim 负责人）的姓氏，构成名字的后半部分。它将品牌与自身历史，以及迈出第一步的人连接起来。', 'MusquimはVulquimの責任者Marceloの姓で、名前の後半を生みました。ブランドの歴史と、最初の一歩を踏み出した人をつなぎます。'),
    statement: tr('O fogo inspira. A técnica dá forma.<br><strong>A construção é o que nos move.</strong>', 'Fire inspires. Technique gives it form.<br><strong>Building is what moves us.</strong>', 'El fuego inspira. La técnica le da forma.<br><strong>Construir es lo que nos mueve.</strong>', '火焰带来灵感，技术赋予形态。<br><strong>构建是驱动我们的力量。</strong>', '火が प्रेरを与え、技術が形にする。<br><strong>つくることが私たちを動かす。</strong>'),
    principlesLabel: tr('COMO PENSAMOS', 'HOW WE THINK', 'CÓMO PENSAMOS', '我们的思考方式', '考え方'),
    principlesTitle: tr('Imaginar.<br>Simplificar.<br><span>Construir.</span>', 'Imagine.<br>Simplify.<br><span>Build.</span>', 'Imaginar.<br>Simplificar.<br><span>Construir.</span>', '想象。<br>简化。<br><span>构建。</span>', '想像する。<br>シンプルにする。<br><span>つくる。</span>'),
    principlesIntro: tr('A forja é a inspiração.<br>O software é a nossa forma de criar.', 'The forge is our inspiration.<br>Software is how we create.', 'La forja es la inspiración.<br>El software es nuestra forma de crear.', '锻造是我们的灵感。<br>软件是我们的创造方式。', '鍛冶場がインスピレーション。<br>ソフトウェアが私たちのつくり方。'),
    principleOneTitle: tr('Inovação com propósito.', 'Innovation with purpose.', 'Innovación con propósito.', '有目标的创新。', '目的のあるイノベーション。'),
    principleOne: tr('Encontrar novas maneiras de resolver problemas reais. Cada ideia começa com uma necessidade que merece atenção.', 'Finding new ways to solve real problems. Every idea begins with a need worth addressing.', 'Encontrar nuevas formas de resolver problemas reales. Cada idea comienza con una necesidad que merece atención.', '寻找解决真实问题的新方法。每个想法都源于一个值得关注的需求。', '現実の問題を解決する新しい方法を見つける。すべてのアイデアは、向き合う価値のあるニーズから始まります。'),
    principleTwoTitle: tr('Objetividade em cada escolha.', 'Clarity in every choice.', 'Objetividad en cada decisión.', '每个选择都清晰明确。', '選択の一つひとつを明快に。'),
    principleTwo: tr('Entender o essencial e dar a ele uma forma clara. Menos complicação para quem usa, mais sentido no que construímos.', 'Understanding what matters and giving it a clear form. Less complication for people who use it, more meaning in what we build.', 'Entender lo esencial y darle una forma clara. Menos complicación para quien lo usa, más sentido en lo que construimos.', '理解本质并赋予清晰的形式。让使用者更轻松，让构建更有意义。', '本質を理解し、明快な形にする。使う人の負担を減らし、つくるものに意味を込める。'),
    principleThreeTitle: tr('Construção contínua.', 'Continuous building.', 'Construcción continua.', '持续构建。', 'つくり続ける。'),
    principleThree: tr('Transformar ideias em software e aprender com o uso. Criar também é revisar, aperfeiçoar e seguir em frente.', 'Turning ideas into software and learning from use. Creating also means reviewing, improving and moving forward.', 'Transformar ideas en software y aprender con el uso. Crear también es revisar, perfeccionar y seguir adelante.', '将想法转化为软件，并从使用中学习。创造也意味着复盘、改进和继续前进。', 'アイデアをソフトウェアにし、使われ方から学ぶ。つくることは見直し、磨き、前へ進むことでもあります。'),
    footerTagline: tr('Tecnologia que constrói o amanhã.', 'Technology that builds tomorrow.', 'Tecnología que construye el mañana.', '构筑明天的技术。', '明日をつくるテクノロジー。'),
    backTop: tr('Voltar ao topo', 'Back to top', 'Volver arriba', '返回顶部', 'トップへ戻る'),
    footerDescription: tr('Desenvolvimento de software mobile e SaaS.', 'Mobile and SaaS software development.', 'Desarrollo de software móvil y SaaS.', '移动端和 SaaS 软件开发。', 'モバイルとSaaSのソフトウェア開発。'),
    privacyPreferences: tr('Preferências de privacidade', 'Privacy preferences', 'Preferencias de privacidad', '隐私偏好设置', 'プライバシー設定'),
    footerMade: tr('FEITO PARA CONSTRUIR.', 'MADE TO BUILD.', 'HECHO PARA CONSTRUIR.', '为构建而生。', 'つくるために。'),
    filmTitle: tr('A Vulquim em movimento', 'Vulquim in motion', 'Vulquim en movimiento', '动态中的 Vulquim', '動くVulquim'),
    closeVideo: tr('Fechar vídeo', 'Close video', 'Cerrar vídeo', '关闭视频', '動画を閉じる'),
    videoAlt: tr('Animação da identidade visual da Vulquim, com uma chama vermelha e conexões de circuitos', 'Animation of Vulquim’s visual identity, with a red flame and circuit connections', 'Animación de la identidad visual de Vulquim, con una llama roja y conexiones de circuitos', 'Vulquim 视觉形象动画，包含红色火焰和电路连接', '赤い炎と回路のつながりを描くVulquimのビジュアルアイデンティティアニメーション'),
    videoFallback: tr('Seu navegador não consegue reproduzir este vídeo.', 'Your browser cannot play this video.', 'Tu navegador no puede reproducir este vídeo.', '你的浏览器无法播放此视频。', 'お使いのブラウザはこの動画を再生できません。'),
    filmCaption: tr('O fogo, a criação e a transformação na identidade da Vulquim.', 'Fire, creation and transformation in Vulquim’s identity.', 'El fuego, la creación y la transformación en la identidad de Vulquim.', '火焰、创造与转化，构成 Vulquim 的品牌形象。', '火、創造、変革がVulquimのアイデンティティを形づくる。'),
    consentTitle: tr('Preferências de privacidade', 'Privacy preferences', 'Preferencias de privacidad', '隐私偏好设置', 'プライバシー設定'),
    consentText: tr('Usamos uma ferramenta de análise para entender o uso do site. Você escolhe se ela será carregada.', 'We use an analytics tool to understand how the site is used. You choose whether it loads.', 'Usamos una herramienta de análisis para entender el uso del sitio. Tú eliges si se carga.', '我们使用分析工具来了解网站的使用情况。是否加载由你选择。', 'サイトの利用状況を把握するため分析ツールを使います。読み込むかどうかは選べます。'),
    consentDeny: tr('Recusar análise', 'Decline analytics', 'Rechazar análisis', '拒绝分析', '分析を拒否'),
    consentAccept: tr('Aceitar análise', 'Accept analytics', 'Aceptar análisis', '接受分析', '分析を許可')
  };

  const projects = {
    kerva: {
      title: tr('Kerva | Vulquim', 'Kerva | Vulquim', 'Kerva | Vulquim', 'Kerva | Vulquim', 'Kerva | Vulquim'),
      descriptionMeta: tr('Kerva: um projeto Vulquim para trazer mais clareza à vida financeira de pessoas e negócios.', 'Kerva: a Vulquim project bringing more clarity to the financial lives of people and businesses.', 'Kerva: un proyecto de Vulquim para aportar más claridad a la vida financiera de personas y negocios.', 'Kerva：Vulquim 打造的项目，为个人和企业的财务生活带来更多清晰度。', 'Kerva：人やビジネスのファイナンスをもっと明快にするVulquimのプロジェクト。'),
      ogDescription: tr('Finanças em construção, com clareza para o que entra, o que sai e o que vem depois.', 'Finances in progress, with clarity about what comes in, what goes out and what comes next.', 'Finanzas en construcción, con claridad sobre lo que entra, lo que sale y lo que sigue.', '财务正在构建中，清晰看见收入、支出和下一步。', '構築中のファイナンス。入るもの、出るもの、その先を明快に。'),
      identity: tr('Identidade do projeto Kerva', 'Kerva project identity', 'Identidad del proyecto Kerva', 'Kerva 项目标识', 'Kervaプロジェクトのアイデンティティ'),
      kicker: tr('PROJETO 01 / EM DESENVOLVIMENTO', 'PROJECT 01 / IN DEVELOPMENT', 'PROYECTO 01 / EN DESARROLLO', '项目 01 / 开发中', 'プロジェクト 01 / 開発中'),
      heroTitle: tr('Kerva<span>finanças no lugar.</span>', 'Kerva<span>finances in place.</span>', 'Kerva<span>finanzas en su lugar.</span>', 'Kerva<span>让财务各就其位。</span>', 'Kerva<span>ファイナンスを整える。</span>'),
      lead: tr('Um produto financeiro em construção para transformar números espalhados em uma visão mais clara do que entra, do que sai e do que vem depois.', 'A financial product in progress, turning scattered numbers into a clearer view of what comes in, what goes out and what comes next.', 'Un producto financiero en construcción para transformar números dispersos en una visión más clara de lo que entra, lo que sale y lo que sigue.', '一款正在构建的财务产品，将分散的数字转化为对收入、支出和下一步更清晰的认识。', '散らばった数字を、入るもの・出るもの・その先が見える形に変える、構築中のファイナンシャルプロダクト。'),
      inDevelopment: tr('Em construção', 'In development', 'En construcción', '构建中', '構築中'),
      platform: tr('Mobile + SaaS', 'Mobile + SaaS', 'Mobile + SaaS', '移动端 + SaaS', 'モバイル + SaaS'),
      artLabel: tr('KERVA / SYSTEM 01', 'KERVA / SYSTEM 01', 'KERVA / SYSTEM 01', 'KERVA / 系统 01', 'KERVA / システム 01'),
      artAlt: tr('Painel visual do projeto Kerva', 'Visual panel for the Kerva project', 'Panel visual del proyecto Kerva', 'Kerva 项目视觉面板', 'Kervaプロジェクトのビジュアルパネル'),
      artIndex: tr('CLAREZA &nbsp;—&nbsp; CONTROLE', 'CLARITY &nbsp;—&nbsp; CONTROL', 'CLARIDAD &nbsp;—&nbsp; CONTROL', '清晰 <span aria-hidden="true">—</span> 控制', '明快さ <span aria-hidden="true">—</span> コントロール'),
      directionLabel: tr('A direção', 'The direction', 'La dirección', '方向', '方向性'),
      directionTitle: tr('Menos ruído.<br><span>Mais visão.</span>', 'Less noise.<br><span>More vision.</span>', 'Menos ruido.<br><span>Más visión.</span>', '更少噪音。<br><span>看得更清。</span>', 'ノイズを減らす。<br><span>視界を広げる。</span>'),
      directionIntro: tr('Kerva nasce da vontade de deixar a vida financeira mais compreensível. A experiência é pensada para aproximar informação e decisão, com uma base que acompanha pessoas e negócios.', 'Kerva comes from the desire to make financial life easier to understand. The experience brings information closer to decisions, on a foundation that follows people and businesses.', 'Kerva nace del deseo de hacer la vida financiera más comprensible. La experiencia acerca la información y la decisión, con una base que acompaña a personas y negocios.', 'Kerva 源于让财务生活更易理解的愿望。它让信息更接近决策，并以能陪伴个人和企业的基础为依托。', 'Kervaは、ファイナンスをもっと理解しやすくしたいという思いから生まれました。情報と意思決定を近づけ、人やビジネスに寄り添う基盤をつくります。'),
      cards: [
        [tr('01 / VISÃO', '01 / VISION', '01 / VISIÓN', '01 / 视野', '01 / ビジョン'), tr('Enxergar o todo', 'See the whole', 'Ver el todo', '看见全貌', '全体を見る'), tr('Uma leitura mais direta dos movimentos financeiros, para entender o presente antes de planejar o próximo passo.', 'A more direct reading of financial movements, to understand the present before planning the next step.', 'Una lectura más directa de los movimientos financieros, para entender el presente antes de planificar el siguiente paso.', '更直接地阅读财务变动，在规划下一步前理解当下。', 'お金の動きを直接読み取り、次の一歩を考える前に今を理解する。')],
        [tr('02 / ROTINA', '02 / ROUTINE', '02 / RUTINA', '02 / 日常', '02 / ルーティン'), tr('Organizar o dia a dia', 'Organize everyday life', 'Organizar el día a día', '整理日常', '日々を整える'), tr('Informação útil no momento certo, sem transformar a rotina em uma planilha impossível de manter.', 'Useful information at the right time, without turning daily life into an impossible spreadsheet.', 'Información útil en el momento adecuado, sin convertir la rutina en una hoja de cálculo imposible de mantener.', '在恰当的时刻获得有用信息，不让日常变成难以维护的表格。', '必要なときに役立つ情報を。日常を維持できない表計算にしない。')],
        [tr('03 / BASE', '03 / FOUNDATION', '03 / BASE', '03 / 基础', '03 / 基盤'), tr('Construir para crescer', 'Build to grow', 'Construir para crecer', '为成长而构建', '成長のためにつくる'), tr('Um produto que começa essencial e pode evoluir junto com a complexidade de cada vida financeira.', 'A product that starts with the essentials and can evolve with the complexity of every financial life.', 'Un producto que comienza con lo esencial y puede evolucionar junto con la complejidad de cada vida financiera.', '从核心开始，并随着每种财务生活的复杂度不断发展。', '本質から始まり、それぞれのファイナンスの複雑さとともに進化するプロダクト。')]
      ],
      whereLabel: tr('Onde estamos', 'Where we are', 'Dónde estamos', '我们所处的位置', '現在地'),
      whereTitle: tr('A fundação<br><span>está em curso.</span>', 'The foundation<br><span>is underway.</span>', 'La base<br><span>está en marcha.</span>', '基础<br><span>正在构建。</span>', '基盤は<br><span>構築中。</span>'),
      whereIntro: tr('O projeto está sendo construído em camadas: primeiro a base confiável, depois a experiência que torna essa base realmente útil.', 'The project is being built in layers: first a reliable foundation, then the experience that makes it truly useful.', 'El proyecto se construye por capas: primero una base confiable y después la experiencia que la vuelve realmente útil.', '项目分层构建：先打造可靠基础，再构建让基础真正有用的体验。', 'プロジェクトは層を重ねて構築中。まず信頼できる基盤、その後に基盤を本当に役立てる体験を。'),
      specs: [[tr('Frente', 'Area', 'Frente', '方向', '領域'), tr('Mobile e web', 'Mobile and web', 'Mobile y web', '移动端和网页', 'モバイルとWeb')], [tr('Foco', 'Focus', 'Enfoque', '重点', '焦点'), tr('Clareza financeira', 'Financial clarity', 'Claridad financiera', '财务清晰度', 'ファイナンスの明快さ')], [tr('Construção', 'Build', 'Construcción', '构建', '構築'), tr('Base incremental', 'Incremental foundation', 'Base incremental', '渐进式基础', '段階的な基盤')], [tr('Estado', 'Status', 'Estado', '状态', '状態'), tr('Em desenvolvimento', 'In development', 'En desarrollo', '开发中', '開発中')]],
      roadmapLabel: tr('Etapas atuais do projeto Kerva', 'Current stages of the Kerva project', 'Etapas actuales del proyecto Kerva', 'Kerva 项目当前阶段', 'Kervaプロジェクトの現在の段階'),
      steps: [[tr('01 / agora', '01 / now', '01 / ahora', '01 / 现在', '01 / 今'), tr('Fundamentos', 'Foundations', 'Fundamentos', '基础', '基盤'), tr('Estrutura de dados, regras e contratos que sustentam o produto.', 'Data structures, rules and contracts that support the product.', 'Estructura de datos, reglas y contratos que sostienen el producto.', '支撑产品的数据结构、规则和契约。', 'プロダクトを支えるデータ構造、ルール、契約。')], [tr('02 / em seguida', '02 / next', '02 / después', '02 / 接下来', '02 / 次に'), tr('Experiência', 'Experience', 'Experiencia', '体验', '体験'), tr('Fluxos mais simples para registrar, consultar e compreender.', 'Simpler flows to record, consult and understand.', 'Flujos más sencillos para registrar, consultar y comprender.', '更简单地记录、查询和理解。', '記録、確認、理解をもっとシンプルに。')], [tr('03 / depois', '03 / later', '03 / más adelante', '03 / 之后', '03 / その後'), tr('Evolução', 'Evolution', 'Evolución', '演进', '進化'), tr('Aperfeiçoamento contínuo a partir do uso real.', 'Continuous improvement based on real use.', 'Perfeccionamiento continuo a partir del uso real.', '基于真实使用的持续改进。', '実際の利用から継続的に磨き上げる。')]],
      footer: tr('Kerva é um produto Vulquim.', 'Kerva is a Vulquim product.', 'Kerva es un producto de Vulquim.', 'Kerva 是 Vulquim 的产品。', 'KervaはVulquimのプロダクトです。')
    },
    handos: {
      title: tr('HandOS | Vulquim', 'HandOS | Vulquim', 'HandOS | Vulquim', 'HandOS | Vulquim', 'HandOS | Vulquim'),
      descriptionMeta: tr('HandOS: um projeto Vulquim para dar clareza e ritmo à operação técnica.', 'HandOS: a Vulquim project bringing clarity and rhythm to technical operations.', 'HandOS: un proyecto de Vulquim para dar claridad y ritmo a la operación técnica.', 'HandOS：Vulquim 打造的项目，为技术运营带来清晰度和节奏。', 'HandOS：技術業務に明快さとリズムをもたらすVulquimのプロジェクト。'),
      ogDescription: tr('Operação no ritmo certo, com uma base local-first e segurança desde o começo.', 'Operations at the right pace, with a local-first foundation and security from the start.', 'Operación al ritmo justo, con una base local-first y seguridad desde el comienzo.', '以合适的节奏运营，从一开始就具备 local-first 基础和安全性。', '最初からセキュリティを備えた、local-first基盤の適切な運用リズム。'),
      identity: tr('Identidade do projeto HandOS', 'HandOS project identity', 'Identidad del proyecto HandOS', 'HandOS 项目标识', 'HandOSプロジェクトのアイデンティティ'),
      kicker: tr('PROJETO 02 / EM DESENVOLVIMENTO', 'PROJECT 02 / IN DEVELOPMENT', 'PROYECTO 02 / EN DESARROLLO', '项目 02 / 开发中', 'プロジェクト 02 / 開発中'),
      heroTitle: tr('HandOS<span>operação no ritmo certo.</span>', 'HandOS<span>operations at the right pace.</span>', 'HandOS<span>operación al ritmo justo.</span>', 'HandOS<span>以合适节奏运营。</span>', 'HandOS<span>ちょうどいいリズムで。</span>'),
      lead: tr('Uma base local-first para organizar a operação técnica com mais clareza, continuidade e segurança desde o primeiro toque.', 'A local-first foundation for organizing technical operations with more clarity, continuity and security from the first touch.', 'Una base local-first para organizar la operación técnica con más claridad, continuidad y seguridad desde el primer toque.', '以 local-first 为基础，从第一次触碰开始，让技术运营更清晰、连续且安全。', '最初のタッチから、技術業務をより明快・継続的・安全に整えるlocal-first基盤。'),
      inDevelopment: tr('Em construção', 'In development', 'En construcción', '构建中', '構築中'),
      platform: tr('Android + local-first', 'Android + local-first', 'Android + local-first', 'Android + local-first', 'Android + local-first'),
      artLabel: tr('HANDOS / CORE 02', 'HANDOS / CORE 02', 'HANDOS / CORE 02', 'HANDOS / 核心 02', 'HANDOS / コア 02'),
      artAlt: tr('Painel visual do projeto HandOS', 'Visual panel for the HandOS project', 'Panel visual del proyecto HandOS', 'HandOS 项目视觉面板', 'HandOSプロジェクトのビジュアルパネル'),
      artIndex: tr('CONTINUIDADE &nbsp;—&nbsp; FOCO', 'CONTINUITY &nbsp;—&nbsp; FOCUS', 'CONTINUIDAD &nbsp;—&nbsp; FOCO', '连续 <span aria-hidden="true">—</span> 专注', '継続性 <span aria-hidden="true">—</span> 集中'),
      directionLabel: tr('A direção', 'The direction', 'La dirección', '方向', '方向性'),
      directionTitle: tr('Trabalho em movimento.<br><span>Controle à mão.</span>', 'Work in motion.<br><span>Control at hand.</span>', 'Trabajo en movimiento.<br><span>Control a mano.</span>', '工作在流动。<br><span>掌控在手。</span>', '動く仕事。<br><span>手元にコントロール。</span>'),
      directionIntro: tr('HandOS parte do chão da operação: tarefas, prazos e informação precisam estar próximos de quem executa, sem depender de um cenário perfeito para funcionar.', 'HandOS starts from the ground of operations: tasks, deadlines and information need to stay close to the people doing the work, without requiring perfect conditions.', 'HandOS parte del terreno de la operación: tareas, plazos e información deben estar cerca de quien ejecuta, sin depender de un escenario perfecto para funcionar.', 'HandOS 从运营一线出发：任务、期限和信息应靠近执行者，不依赖完美环境也能工作。', 'HandOSは現場から始まります。タスク、期限、情報を実行する人のそばに置き、完璧な環境に頼らず動かします。'),
      cards: [
        [tr('01 / FLUXO', '01 / FLOW', '01 / FLUJO', '01 / 流程', '01 / フロー'), tr('Ver o próximo passo', 'See the next step', 'Ver el siguiente paso', '看见下一步', '次の一歩を見る'), tr('Uma operação mais legível, em que cada atividade encontra seu lugar e o time sabe o que merece atenção.', 'A more legible operation, where every activity has its place and the team knows what deserves attention.', 'Una operación más legible, donde cada actividad encuentra su lugar y el equipo sabe qué merece atención.', '让每项活动各就其位，让团队知道什么值得关注。', '一つひとつの活動が居場所を持ち、チームが注目すべきことを把握できる運用。')],
        [tr('02 / CONTINUIDADE', '02 / CONTINUITY', '02 / CONTINUIDAD', '02 / 连续性', '02 / 継続性'), tr('Seguir trabalhando', 'Keep working', 'Seguir trabajando', '继续工作', '仕事を続ける'), tr('Uma abordagem local-first para manter a experiência próxima da rotina, inclusive quando a conexão não é o centro da história.', 'A local-first approach that keeps the experience close to the routine, even when connectivity is not the center of the story.', 'Un enfoque local-first para mantener la experiencia cerca de la rutina, incluso cuando la conexión no es el centro de la historia.', '以 local-first 方式贴近日常，即使连接不是核心也能保持体验。', '接続が中心でないときも、日常のそばに体験を置くlocal-firstアプローチ。')],
        [tr('03 / CONFIANÇA', '03 / TRUST', '03 / CONFIANZA', '03 / 信任', '03 / 信頼'), tr('Proteger o essencial', 'Protect what matters', 'Proteger lo esencial', '保护重要之物', '本質を守る'), tr('Segurança tratada como parte da fundação do produto, não como uma camada adicionada depois.', 'Security treated as part of the product foundation, not as a layer added later.', 'La seguridad se trata como parte de la base del producto, no como una capa añadida después.', '将安全视为产品基础的一部分，而不是事后添加的层。', 'セキュリティを後付けの層ではなく、プロダクトの基盤の一部として扱う。')]
      ],
      whereLabel: tr('Onde estamos', 'Where we are', 'Dónde estamos', '我们所处的位置', '現在地'),
      whereTitle: tr('Uma base firme<br><span>para a rotina real.</span>', 'A solid foundation<br><span>for real routines.</span>', 'Una base firme<br><span>para la rutina real.</span>', '坚实基础<br><span>服务真实日常。</span>', '確かな基盤を<br><span>現実の仕事へ。</span>'),
      whereIntro: tr('A construção avança pelo núcleo: dados protegidos, fluxos consistentes e uma experiência Android que respeita a velocidade do trabalho.', 'The build advances through the core: protected data, consistent flows and an Android experience that respects the pace of work.', 'La construcción avanza desde el núcleo: datos protegidos, flujos consistentes y una experiencia Android que respeta el ritmo del trabajo.', '构建从核心推进：保护数据、保持流程一致，并提供尊重工作节奏的 Android 体验。', '構築はコアから進みます。保護されたデータ、一貫したフロー、仕事の速さを尊重するAndroid体験。'),
      specs: [[tr('Frente', 'Area', 'Frente', '方向', '領域'), tr('Android', 'Android', 'Android', 'Android', 'Android')], [tr('Direção', 'Direction', 'Dirección', '方向', '方向性'), tr('Local-first', 'Local-first', 'Local-first', 'Local-first', 'Local-first')], [tr('Foco', 'Focus', 'Enfoque', '重点', '焦点'), tr('Operação técnica', 'Technical operations', 'Operación técnica', '技术运营', '技術業務')], [tr('Estado', 'Status', 'Estado', '状态', '状態'), tr('Em desenvolvimento', 'In development', 'En desarrollo', '开发中', '開発中')]],
      roadmapLabel: tr('Etapas atuais do projeto HandOS', 'Current stages of the HandOS project', 'Etapas actuales del proyecto HandOS', 'HandOS 项目当前阶段', 'HandOSプロジェクトの現在の段階'),
      steps: [[tr('01 / agora', '01 / now', '01 / ahora', '01 / 现在', '01 / 今'), tr('Núcleo protegido', 'Protected core', 'Núcleo protegido', '受保护的核心', '守られたコア'), tr('Base local, dados e controles essenciais para a operação.', 'Local foundation, data and essential controls for operations.', 'Base local, datos y controles esenciales para la operación.', '运营所需的本地基础、数据和核心控制。', '業務に必要なローカル基盤、データ、基本コントロール。')], [tr('02 / em seguida', '02 / next', '02 / después', '02 / 接下来', '02 / 次に'), tr('Fluxos de campo', 'Field workflows', 'Flujos de campo', '现场流程', '現場フロー'), tr('Rotinas objetivas para acompanhar o trabalho sem atrito.', 'Clear routines to follow the work without friction.', 'Rutinas objetivas para acompañar el trabajo sin fricción.', '用清晰流程无阻碍地跟进工作。', '仕事を無理なく追える、明快な現場ルーティン。')], [tr('03 / depois', '03 / later', '03 / más adelante', '03 / 之后', '03 / その後'), tr('Ritmo contínuo', 'Continuous rhythm', 'Ritmo continuo', '持续节奏', '続くリズム'), tr('Refinamento a partir do uso real e das necessidades do time.', 'Refinement based on real use and the team’s needs.', 'Perfeccionamiento a partir del uso real y las necesidades del equipo.', '根据真实使用和团队需求持续完善。', '実際の利用とチームのニーズから磨き上げる。')]],
      footer: tr('HandOS é um produto Vulquim.', 'HandOS is a Vulquim product.', 'HandOS es un producto de Vulquim.', 'HandOS 是 Vulquim 的产品。', 'HandOSはVulquimのプロダクトです。')
    }
  };

  const page = document.body.dataset.page || 'home';
  const pageCopy = page === 'home' ? home : projects[page];
  if (!pageCopy) return;

  const getStoredLanguage = () => {
    try {
      const stored = window.localStorage.getItem(languageKey);
      return languages.includes(stored) ? stored : 'pt-BR';
    } catch {
      return 'pt-BR';
    }
  };

  let currentLanguage = getStoredLanguage();

  const value = (entry) => entry && (entry[currentLanguage] ?? entry['pt-BR']);

  const setText = (selector, entry, options = {}) => {
    document.querySelectorAll(selector).forEach((element) => {
      const translated = value(entry);
      if (translated === undefined) return;
      if (options.html) element.innerHTML = translated;
      else if (options.preserveChildren) {
        const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
        if (textNodes.length) textNodes[textNodes.length - 1].nodeValue = ` ${translated}`;
        else element.textContent = translated;
      } else element.textContent = translated;
    });
  };

  const setAttribute = (selector, attribute, entry) => {
    const translated = value(entry);
    if (translated === undefined) return;
    document.querySelectorAll(selector).forEach((element) => element.setAttribute(attribute, translated));
  };

  const setIndexedText = (selector, entries, options = {}) => {
    document.querySelectorAll(selector).forEach((element, index) => setTextElement(element, entries[index], options));
  };

  const setTextElement = (element, entry, options = {}) => {
    const translated = value(entry);
    if (translated === undefined) return;
    if (options.html) element.innerHTML = translated;
    else if (options.preserveChildren) {
      const textNodes = Array.from(element.childNodes).filter((node) => node.nodeType === Node.TEXT_NODE);
      if (textNodes.length) textNodes[textNodes.length - 1].nodeValue = ` ${translated}`;
      else element.textContent = translated;
    } else element.textContent = translated;
  };

  const setMeta = () => {
    document.documentElement.lang = currentLanguage;
    document.title = value(pageCopy.title);
    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (description) description.content = value(pageCopy.descriptionMeta);
    if (ogTitle) ogTitle.content = value(pageCopy.title);
    if (ogDescription) ogDescription.content = value(pageCopy.ogDescription);
    if (ogLocale) ogLocale.content = localeMap[currentLanguage];
  };

  const applyCommon = () => {
    setText('.skip-link', common.skip);
    setAttribute('.site-header .brand', 'aria-label', common.brandHome);
    setAttribute('.site-footer .brand', 'aria-label', common.brandBack);
    setAttribute('.main-nav', 'aria-label', common.navigation);
    setText('.main-nav > a:nth-of-type(1)', common.navEssence);
    setText('.main-nav > a:nth-of-type(2)', common.navCreate);
    setText('.main-nav > a:nth-of-type(3)', common.navThink);
    setText('.nav-projects summary', common.projects);
    document.querySelectorAll('.nav-projects-menu a').forEach((link) => {
      const label = link.textContent.trim().toLowerCase();
      setTextElement(link.querySelector('span'), label.startsWith('kerva') ? common.kervaNav : common.handosNav);
    });
    setText('.language-switcher label', common.language);
    setAttribute('.language-switcher select', 'aria-label', common.languageAria);
    setText('.project-back', common.backToProjects, { preserveChildren: true });
    setText('.footer-bottom .privacy-preferences', common.privacyPreferences);
  };

  const applyHome = () => {
    setText('.hero-eyebrow', home.eyebrow, { preserveChildren: true });
    setText('#hero-title', home.heroTitle, { html: true });
    setText('.hero-description', home.heroDescription);
    setText('.button-primary', home.createButton, { preserveChildren: true });
    setText('.text-link', home.essenceLink, { preserveChildren: true });
    setAttribute('.hero-flame', 'alt', home.flameAlt);
    const motionMarkup = languages.reduce((translated, language) => {
      translated[language] = `${home.motion[language]}<small>${home.watch[language]}</small>`;
      return translated;
    }, {});
    setText('.motion-link > span:last-child', motionMarkup, { html: true });
    setText('.hero-bottom p', home.heroBottom, { html: true });
    setText('.hero-bottom a', home.exploreText, { preserveChildren: true });
    setAttribute('.hero-bottom a', 'aria-label', home.explore);
    setText('.services .section-label p', home.servicesLabel);
    setText('.services .section-intro h2', home.servicesTitle, { html: true });
    setText('.services .section-intro > p', home.servicesIntro);
    setText('.service:nth-child(1) .service-category', home.mobileCategory);
    setText('.service:nth-child(1) h3', home.mobileTitle, { html: true });
    setText('.service:nth-child(1) > p', home.mobileDescription);
    setText('.service:nth-child(1) .service-foot > span', home.mobileFoot);
    setText('.service:nth-child(2) .service-category', home.saasCategory);
    setText('.service:nth-child(2) h3', home.saasTitle, { html: true });
    setText('.service:nth-child(2) > p', home.saasDescription);
    setText('.service:nth-child(2) .service-foot > span', home.saasFoot);
    setText('.essence .section-label p', home.essenceLabel);
    setText('.essence-intro h2', home.essenceTitle, { html: true });
    setText('.essence-intro > p', home.essenceIntro, { html: true });
    setAttribute('.name-composition', 'aria-label', home.nameAria);
    setText('.name-vul', home.vulName, { html: true });
    setText('.name-quim', home.quimName, { html: true });
    setText('.origins article:nth-child(1) h3', home.originOneTitle);
    setText('.origins article:nth-child(1) p', home.originOne);
    setText('.origins article:nth-child(2) h3', home.originTwoTitle);
    setText('.origins article:nth-child(2) p', home.originTwo);
    setText('.essence-statement p', home.statement, { html: true });
    setText('.principles .section-label p', home.principlesLabel);
    setText('.principles-heading h2', home.principlesTitle, { html: true });
    setText('.principles-heading > p', home.principlesIntro, { html: true });
    setText('.principles-list article:nth-child(1) h3', home.principleOneTitle);
    setText('.principles-list article:nth-child(1) p', home.principleOne);
    setText('.principles-list article:nth-child(2) h3', home.principleTwoTitle);
    setText('.principles-list article:nth-child(2) p', home.principleTwo);
    setText('.principles-list article:nth-child(3) h3', home.principleThreeTitle);
    setText('.principles-list article:nth-child(3) p', home.principleThree);
    setText('.footer-main > p', home.footerTagline);
    setText('.back-top', home.backTop, { preserveChildren: true });
    setText('.footer-bottom > p:nth-child(2)', home.footerDescription);
    setText('#film-title', home.filmTitle);
    setAttribute('.film-close', 'aria-label', home.closeVideo);
    setAttribute('#film', 'aria-label', home.videoAlt);
    const film = document.querySelector('#film');
    if (film) {
      const fallback = Array.from(film.childNodes).find((node) => node.nodeType === Node.TEXT_NODE);
      if (fallback) fallback.nodeValue = value(home.videoFallback);
    }
    setText('.film-caption', home.filmCaption);
    const consentTitle = document.querySelector('#analytics-consent-title');
    if (consentTitle) consentTitle.innerHTML = `<strong>${value(home.consentTitle)}</strong><br>${value(home.consentText)}`;
    setText('[data-analytics-consent="denied"]', home.consentDeny);
    setText('[data-analytics-consent="accepted"]', home.consentAccept);
  };

  const applyProject = () => {
    setAttribute('.project-identity', 'aria-label', pageCopy.identity);
    setText('.project-kicker', pageCopy.kicker);
    setText('.project-hero h1', pageCopy.heroTitle, { html: true });
    setText('.project-lead', pageCopy.lead);
    setText('.project-meta .project-status:nth-child(1)', pageCopy.inDevelopment, { preserveChildren: true });
    setText('.project-meta .project-status:nth-child(2)', pageCopy.platform);
    setAttribute('.project-hero-art', 'aria-label', pageCopy.artAlt);
    setText('.hero-art-label', pageCopy.artLabel);
    setText('.hero-art-index', pageCopy.artIndex, { html: true });
    setText('.project-section:nth-of-type(2) .project-label', pageCopy.directionLabel);
    setText('.project-section:nth-of-type(2) h2', pageCopy.directionTitle, { html: true });
    setText('.project-section:nth-of-type(2) .project-section-heading > p', pageCopy.directionIntro);
    document.querySelectorAll('.project-section:nth-of-type(2) .project-card').forEach((card, index) => {
      const cardCopy = pageCopy.cards[index];
      if (!cardCopy) return;
      setTextElement(card.querySelector('.project-card-index'), cardCopy[0]);
      setTextElement(card.querySelector('h3'), cardCopy[1]);
      setTextElement(card.querySelector('p'), cardCopy[2]);
    });
    setText('.project-section:nth-of-type(3) .project-label', pageCopy.whereLabel);
    setText('.project-section:nth-of-type(3) h2', pageCopy.whereTitle, { html: true });
    setText('.project-section:nth-of-type(3) .project-section-heading > p', pageCopy.whereIntro);
    document.querySelectorAll('.project-specs > div').forEach((spec, index) => {
      const specCopy = pageCopy.specs[index];
      if (!specCopy) return;
      setTextElement(spec.querySelector('dt'), specCopy[0]);
      setTextElement(spec.querySelector('dd'), specCopy[1]);
    });
    setAttribute('.project-roadmap', 'aria-label', pageCopy.roadmapLabel);
    document.querySelectorAll('.project-step').forEach((step, index) => {
      const stepCopy = pageCopy.steps[index];
      if (!stepCopy) return;
      setTextElement(step.querySelector('.project-step-index'), stepCopy[0]);
      setTextElement(step.querySelector('h3'), stepCopy[1]);
      setTextElement(step.querySelector('p'), stepCopy[2]);
    });
    setText('.project-footer-main > p', pageCopy.footer);
  };

  const applyMenuLabel = () => {
    const button = document.querySelector('.menu-toggle');
    if (button) button.setAttribute('aria-label', value(button.getAttribute('aria-expanded') === 'true' ? common.menuClose : common.menuOpen));
  };

  const applyTranslations = () => {
    setMeta();
    applyCommon();
    if (page === 'home') applyHome();
    else applyProject();
    document.querySelectorAll('[data-language-select]').forEach((select) => {
      select.value = currentLanguage;
      select.setAttribute('aria-label', value(common.languageAria));
    });
    applyMenuLabel();
  };

  const saveLanguage = (language) => {
    currentLanguage = languages.includes(language) ? language : 'pt-BR';
    try {
      window.localStorage.setItem(languageKey, currentLanguage);
    } catch {
      // A storage bloqueada não impede a troca no carregamento atual.
    }
    applyTranslations();
  };

  document.querySelectorAll('[data-language-select]').forEach((select) => {
    select.addEventListener('change', () => saveLanguage(select.value));
  });

  window.vulquimI18n = {
    t: (key) => {
      const entry = key === 'menu.open' ? common.menuOpen : key === 'menu.close' ? common.menuClose : null;
      return value(entry) || key;
    }
  };

  applyTranslations();
})();
