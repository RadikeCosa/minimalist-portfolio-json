from reportlab import rl_config
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfdoc import PDFString
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    HRFlowable,
    KeepTogether,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)


OUTPUT = "public/cv/CV_Ramiro_Nicolas_Cosa.pdf"

# Keep PDF metadata and document IDs stable between equivalent generations.
rl_config.invariant = 1

BLUE = colors.HexColor("#136B5C")
INK = colors.HexColor("#111111")
SECONDARY = colors.HexColor("#555555")
MUTED = colors.HexColor("#707070")
RULE = colors.HexColor("#D9DDE2")

pdfmetrics.registerFont(TTFont("CVSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("CVSans-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
pdfmetrics.registerFont(TTFont("CVMono", "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"))

styles = getSampleStyleSheet()
name = ParagraphStyle(
    "Name",
    fontName="CVSans-Bold",
    fontSize=22,
    leading=25,
    textColor=INK,
    spaceAfter=3,
)
headline = ParagraphStyle(
    "Headline",
    fontName="CVSans-Bold",
    fontSize=11.5,
    leading=14,
    textColor=SECONDARY,
    spaceAfter=7,
)
contact = ParagraphStyle(
    "Contact",
    fontName="CVMono",
    fontSize=7.6,
    leading=11,
    textColor=SECONDARY,
    spaceAfter=8,
)
section = ParagraphStyle(
    "Section",
    fontName="CVSans-Bold",
    fontSize=11.5,
    leading=14,
    textColor=INK,
    spaceBefore=7,
    spaceAfter=3,
)
body = ParagraphStyle(
    "Body",
    fontName="CVSans",
    fontSize=9.2,
    leading=12.8,
    textColor=INK,
    spaceAfter=4,
)
entry_title = ParagraphStyle(
    "EntryTitle",
    fontName="CVSans-Bold",
    fontSize=9.7,
    leading=12.3,
    textColor=INK,
    spaceBefore=3,
    spaceAfter=1,
)
meta = ParagraphStyle(
    "Meta",
    fontName="CVMono",
    fontSize=7.6,
    leading=10.2,
    textColor=MUTED,
    spaceAfter=3,
)
bullet = ParagraphStyle(
    "Bullet",
    parent=body,
    leftIndent=10,
    firstLineIndent=-7,
    bulletIndent=0,
    spaceAfter=2.5,
)
compact = ParagraphStyle(
    "Compact",
    parent=body,
    fontSize=8.6,
    leading=11.8,
    spaceAfter=2,
)


def section_title(text):
    return [
        Paragraph(text, section),
        HRFlowable(width="100%", thickness=0.8, color=BLUE, spaceBefore=0, spaceAfter=5),
    ]


def item(title, meta_text, bullets):
    parts = [
        Paragraph(title, entry_title),
        Paragraph(f'<font color="#136B5C">●</font> {meta_text}', meta),
    ]
    parts.extend(Paragraph(text, bullet, bulletText="•") for text in bullets)
    return KeepTogether(parts)


def footer(canvas, doc):
    canvas._doc.Catalog.Lang = PDFString("es-AR")
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 12 * mm, A4[0] - doc.rightMargin, 12 * mm)
    canvas.setFont("CVMono", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 7.5 * mm, "Ramiro Nicolás Cosa - CV general")
    canvas.drawRightString(A4[0] - doc.rightMargin, 7.5 * mm, f"{doc.page} / 2")
    canvas.restoreState()


doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=18 * mm,
    rightMargin=18 * mm,
    topMargin=15 * mm,
    bottomMargin=17 * mm,
    title="CV general - Ramiro Nicolás Cosa",
    author="Ramiro Nicolás Cosa",
    subject="Análisis, desarrollo e implementación de productos digitales",
)

story = [
    Paragraph("Ramiro Nicolás Cosa", name),
    Paragraph("Análisis, desarrollo e implementación de productos digitales", headline),
    Paragraph(
        'Neuquén, Argentina  |  +54 9 299 521-7189  |  '
        '<link href="mailto:ramirocosa@gmail.com" color="#136B5C">Email</link>  |  '
        '<link href="https://www.linkedin.com/in/ramicosa/" color="#136B5C">LinkedIn</link>  |  '
        '<link href="https://github.com/RadikeCosa" color="#136B5C">GitHub</link>  |  '
        '<link href="https://ramirocosa.is-a.dev/" color="#136B5C">ramirocosa.is-a.dev</link>',
        contact,
    ),
    *section_title("Perfil"),
    Paragraph(
        "Analizo necesidades y desarrollo productos digitales para procesos reales. Desde 2020 "
        "diseño e implemento productos web propios y trabajos independientes con TypeScript, JavaScript, "
        "React y Next.js. Trabajo desde los flujos y estados hasta la implementación y calidad, con más "
        "de 20 años de experiencia sanitaria como especialización para proyectos HealthTech.",
        body,
    ),
    *section_title("Proyectos seleccionados"),
    item(
        "Plataforma clínica para rehabilitación domiciliaria",
        "En desarrollo desde 2020 · Piloto local · Datos ficticios · Sin demo pública | Next.js, TypeScript, HAPI FHIR R4, Vitest, Playwright",
        [
            "Estructuré flujos para consultas, pacientes, tratamientos y visitas, con formularios, validaciones y seguimiento.",
            "Modelé información con FHIR R4 e integré HAPI FHIR localmente; añadí pruebas automatizadas y documentación.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/plataforma-clinica/" color="#136B5C">Caso</link>  |  '
            '<link href="https://github.com/RadikeCosa/kinesiologiaadomicilio" color="#136B5C">Código</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Landing para kinesiología domiciliaria",
        "Sitio público · Análisis e implementación | Next.js, TypeScript, Tailwind CSS",
        [
            "Landing responsive para orientar consultas de un servicio de rehabilitación domiciliaria en Neuquén, con SEO técnico, analítica y contacto por WhatsApp.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/landing-kinesiologia/" color="#136B5C">Caso</link>  |  '
            '<link href="https://kinesiologiaadomicilio.vercel.app/" color="#136B5C">Sitio</link>  |  '
            '<link href="https://github.com/RadikeCosa/kinesiologiaadomicilio" color="#136B5C">Código</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Juegos Familiares",
        "Dos juegos publicados | Next.js, TypeScript, Supabase, PostgreSQL",
        [
            "Diseñé flujos mobile-first para configurar y jugar Impostor y Tutti Frutti desde distintos teléfonos.",
            "Impostor valida roles, votación y puntuación con PostgreSQL, RLS y RPCs; Realtime sincroniza y la sesión se recupera tras desconexiones.",
            "Impostor superó las 100 partidas familiares; observarlas permitió ajustar textos y recorridos.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/juegos-familiares/" color="#136B5C">Caso</link>  |  '
            '<link href="https://juegos-familiares.vercel.app/" color="#136B5C">Sitio</link>  |  '
            '<link href="https://github.com/RadikeCosa/juegos-familiares" color="#136B5C">Código</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Fira Estudio",
        "Trabajo independiente | Next.js, TypeScript, Supabase, Playwright",
        [
            "Diseñé y desarrollé un catálogo responsive, adaptando el alcance de e-commerce a las necesidades operativas del emprendimiento.",
            "Trabajé en accesibilidad, SEO y metadatos, con pruebas unitarias y E2E.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/fira-estudio/" color="#136B5C">Caso</link>  |  '
            '<link href="https://fira-estudio-cyan.vercel.app/" color="#136B5C">Sitio</link>  |  '
            '<link href="https://github.com/RadikeCosa/fira-estudio" color="#136B5C">Código</link>',
        ],
    ),
    *section_title("Áreas de trabajo"),
    Paragraph(
        "<b>Producto y UX:</b> relevamiento, flujos, estados, reglas de negocio, alcance y experiencia operativa.<br/>"
        "<b>Frontend y datos:</b> TypeScript, JavaScript, React, Next.js, HTML/CSS, PostgreSQL y Supabase.<br/>"
        "<b>Calidad:</b> Vitest, Playwright, pruebas unitarias y E2E, RLS/autorización, Git y documentación.",
        compact,
    ),
    PageBreak(),
    *section_title("Experiencia profesional"),
    Paragraph("Experiencia en salud desde 2004 y productos digitales desde 2020.", meta),
    item(
        "Desarrollo de productos digitales",
        "Proyectos propios y trabajo independiente · En paralelo con la actividad sanitaria | 2020 - Actualidad",
        [
            "Análisis de necesidades y definición de flujos y reglas de negocio; desarrollo web y modelado de datos.",
            "Pruebas automatizadas, documentación, control de versiones, despliegue y mantenimiento.",
        ],
    ),
    Spacer(1, 7),
    item(
        "Coordinación, auditoría y procesos de salud",
        "Alegra Salud y otros servicios de internación domiciliaria | 2013 - 2024",
        [
            "Coordinación entre pacientes, familias, profesionales y equipos administrativos; revisión de prestaciones y necesidades documentales.",
            "Participé en la creación conjunta de un área de cuidados paliativos.",
        ],
    ),
    Spacer(1, 7),
    item(
        "Práctica clínica y rehabilitación",
        "Práctica independiente | 2004 - Actualidad",
        [
            "Evaluación funcional, planificación y seguimiento de tratamientos; consultorios hasta 2013 y continuidad posterior fuera de ese ámbito.",
            "Experiencia en rehabilitación clínica y deportiva con distintos equipos y deportistas de alto rendimiento.",
        ],
    ),
    *section_title("Formación"),
    Paragraph("<b>Full Stack Open</b> | Universidad de Helsinki | 2025 - Actualidad", compact),
    Paragraph("<b>Testing de software y Quality Assurance</b> | Egg / Argentina Programa | 2023", compact),
    Paragraph("<b>Diplomatura en Programación Web Full Stack</b> | Universidad Tecnológica Nacional | 2022", compact),
    Paragraph("<b>Programación Full Stack</b> | Egg / Argentina Programa | 2021 - 2022", compact),
    Paragraph("<b>Programador Web Inicial / Front End Developer</b> | Universidad Tecnológica Nacional | 2021", compact),
    Paragraph("<b>Licenciatura en Kinesiología y Fisioterapia</b> | Universidad Nacional de Córdoba | 1998 - 2003", compact),
    *section_title("Idiomas"),
    Paragraph("Español nativo | Inglés C1 Advanced - EF SET 64/100", body),
]

doc.build(story, onFirstPage=footer, onLaterPages=footer)
