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

BLUE = colors.HexColor("#0066CC")
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
        Paragraph(f'<font color="#0066CC">●</font> {meta_text}', meta),
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
    subject="Análisis, implementación y producto",
)

story = [
    Paragraph("Ramiro Nicolás Cosa", name),
    Paragraph("Análisis, implementación y producto", headline),
    Paragraph(
        'Neuquén, Argentina  |  +54 9 299 521-7189  |  '
        '<link href="mailto:ramirocosa@gmail.com" color="#0066CC">Email</link>  |  '
        '<link href="https://www.linkedin.com/in/ramicosa/" color="#0066CC">LinkedIn</link>  |  '
        '<link href="https://github.com/RadikeCosa" color="#0066CC">GitHub</link>  |  '
        '<link href="https://ramirocosa.is-a.dev/" color="#0066CC">ramirocosa.is-a.dev</link>',
        contact,
    ),
    *section_title("Perfil"),
    Paragraph(
        "Analizo procesos, defino flujos y reglas de negocio, y desarrollo soluciones web. "
        "Desde 2020 trabajo en productos propios e independientes con Next.js, TypeScript, "
        "PostgreSQL/Supabase, testing y documentación. Mi experiencia en salud y coordinación "
        "aporta criterio operativo, comunicación y comprensión de procesos complejos, con un "
        "diferencial especialmente útil en HealthTech.",
        body,
    ),
    *section_title("Proyectos seleccionados"),
    item(
        "Plataforma clínica para rehabilitación domiciliaria",
        "Producto a medida · HealthTech | 2020 - Actualidad | Next.js, TypeScript, FHIR, Vitest",
        [
            "Recepción estructurada de consultas y definición del flujo paciente - tratamiento - visita.",
            "Gestión clínica privada/local con FHIR, reglas de negocio, validaciones, pruebas y documentación.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/plataforma-clinica/" color="#0066CC">Caso</link>  |  '
            '<link href="https://kinesiologiaadomicilio.vercel.app/" color="#0066CC">Sitio</link>  |  '
            '<link href="https://github.com/RadikeCosa/kinesiologiaadomicilio" color="#0066CC">Código</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Juegos Familiares - Impostor",
        "Producto propio en uso | 100+ partidas | Next.js, TypeScript, Supabase, PostgreSQL",
        [
            "Juego social mobile-first con salas multi-dispositivo, roles privados, votación y puntuación.",
            "Estado autoritativo en PostgreSQL, RLS/RPCs, Realtime, recuperación de sesión y pruebas.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/impostor/" color="#0066CC">Caso</link>  |  '
            '<link href="https://juegos-familiares.vercel.app/" color="#0066CC">Sitio</link>  |  '
            '<link href="https://github.com/RadikeCosa/juegos-familiares" color="#0066CC">Código</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Fira Estudio",
        "Trabajo independiente | Next.js, TypeScript, Supabase, Playwright",
        [
            "E-commerce con carrito y checkout certificado de Mercado Pago, adaptado luego a catálogo según la capacidad operativa del negocio.",
            '<link href="https://ramirocosa.is-a.dev/proyectos/fira-estudio/" color="#0066CC">Caso</link>  |  '
            '<link href="https://fira-estudio-cyan.vercel.app/" color="#0066CC">Sitio</link>  |  '
            '<link href="https://github.com/RadikeCosa/fira-estudio" color="#0066CC">Código</link>',
        ],
    ),
    *section_title("Áreas de trabajo"),
    Paragraph(
        "<b>Procesos y operaciones:</b> relevamiento, coordinación, documentación, comunicación y prioridades.<br/>"
        "<b>Análisis y producto:</b> flujos, estados, reglas de negocio, alcance y UX operativa.<br/>"
        "<b>Desarrollo y datos:</b> Next.js, React, TypeScript, Node.js, PostgreSQL, Supabase y FHIR R4.<br/>"
        "<b>Calidad:</b> pruebas unitarias y E2E, RLS/autorización, documentación y mantenimiento.",
        compact,
    ),
    PageBreak(),
    *section_title("Experiencia profesional"),
    Paragraph("Experiencia en salud desde 2004 y productos digitales desde 2020.", meta),
    item(
        "Desarrollo de productos digitales",
        "Proyectos propios y trabajo independiente | 2020 - Actualidad",
        [
            "Análisis de necesidades, definición de flujos y reglas, implementación web y modelado de datos.",
            "Testing, documentación, control de versiones, despliegue y mantenimiento de productos en uso.",
        ],
    ),
    Spacer(1, 7),
    item(
        "Coordinación, auditoría y procesos de salud",
        "Alegra Salud y otros servicios de internación domiciliaria | 2013 - 2024",
        [
            "Coordinación entre pacientes, familias, profesionales y equipos administrativos.",
            "Revisión de prestaciones, documentación y necesidades operativas.",
            "Participación en la creación conjunta de un área de cuidados paliativos.",
        ],
    ),
    Spacer(1, 7),
    item(
        "Práctica clínica y rehabilitación",
        "Práctica independiente | 2004 - Actualidad",
        [
            "Evaluación funcional, planificación, seguimiento y documentación de tratamientos.",
            "Trabajo con distintos equipos y deportistas de alto rendimiento en recuperación y planificación anual.",
            "Consultorios hasta 2013; continuidad posterior fuera de consultorios.",
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
