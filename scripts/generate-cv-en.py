from reportlab import rl_config
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.pdfdoc import PDFString
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import HRFlowable, KeepTogether, PageBreak, Paragraph, SimpleDocTemplate, Spacer


OUTPUT = "public/cv/CV_Ramiro_Nicolas_Cosa_EN.pdf"

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
name = ParagraphStyle("Name", fontName="CVSans-Bold", fontSize=22, leading=25, textColor=INK, spaceAfter=3)
headline = ParagraphStyle("Headline", fontName="CVSans-Bold", fontSize=11.5, leading=14, textColor=SECONDARY, spaceAfter=7)
contact = ParagraphStyle("Contact", fontName="CVMono", fontSize=7.6, leading=11, textColor=SECONDARY, spaceAfter=8)
section = ParagraphStyle("Section", fontName="CVSans-Bold", fontSize=11.5, leading=14, textColor=INK, spaceBefore=7, spaceAfter=3)
body = ParagraphStyle("Body", fontName="CVSans", fontSize=9.2, leading=12.8, textColor=INK, spaceAfter=4)
entry_title = ParagraphStyle("EntryTitle", fontName="CVSans-Bold", fontSize=9.7, leading=12.3, textColor=INK, spaceBefore=3, spaceAfter=1)
meta = ParagraphStyle("Meta", fontName="CVMono", fontSize=7.6, leading=10.2, textColor=MUTED, spaceAfter=3)
bullet = ParagraphStyle("Bullet", parent=body, leftIndent=10, firstLineIndent=-7, bulletIndent=0, spaceAfter=2.5)
compact = ParagraphStyle("Compact", parent=body, fontSize=8.6, leading=11.8, spaceAfter=2)


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
    canvas._doc.Catalog.Lang = PDFString("en")
    canvas.saveState()
    canvas.setStrokeColor(RULE)
    canvas.setLineWidth(0.4)
    canvas.line(doc.leftMargin, 12 * mm, A4[0] - doc.rightMargin, 12 * mm)
    canvas.setFont("CVMono", 6.8)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 7.5 * mm, "Ramiro Nicolás Cosa - General résumé")
    canvas.drawRightString(A4[0] - doc.rightMargin, 7.5 * mm, f"{doc.page} / 2")
    canvas.restoreState()


doc = SimpleDocTemplate(
    OUTPUT,
    pagesize=A4,
    leftMargin=18 * mm,
    rightMargin=18 * mm,
    topMargin=15 * mm,
    bottomMargin=17 * mm,
    title="General résumé - Ramiro Nicolás Cosa",
    author="Ramiro Nicolás Cosa",
    subject="Digital product analysis, development, and implementation",
)

story = [
    Paragraph("Ramiro Nicolás Cosa", name),
    Paragraph("Digital Product Analysis, Development &amp; Implementation", headline),
    Paragraph(
        'Neuquén, Argentina  |  +54 9 299 521-7189  |  '
        '<link href="mailto:ramirocosa@gmail.com" color="#136B5C">Email</link>  |  '
        '<link href="https://www.linkedin.com/in/ramicosa/" color="#136B5C">LinkedIn</link>  |  '
        '<link href="https://github.com/RadikeCosa" color="#136B5C">GitHub</link>  |  '
        '<link href="https://ramirocosa.is-a.dev/en/" color="#136B5C">ramirocosa.is-a.dev</link>',
        contact,
    ),
    *section_title("Profile"),
    Paragraph(
        "I analyze needs and build digital products for real workflows. Since 2020, I have designed "
        "and implemented my own web products and independent work with TypeScript, JavaScript, React, "
        "and Next.js. I work from workflows and states through implementation and quality, bringing "
        "more than 20 years of healthcare experience to HealthTech projects.",
        body,
    ),
    *section_title("Selected projects"),
    item(
        "Clinical platform for home rehabilitation",
        "In development since 2020 · Local pilot · Fictional data · No public demo | Next.js, TypeScript, HAPI FHIR R4, Vitest, Playwright",
        [
            "Structured workflows for inquiries, patients, treatment plans, and visits, including forms, validation, and follow-up.",
            "Modeled information with FHIR R4 and integrated HAPI FHIR locally, with automated tests and documentation.",
            '<link href="https://ramirocosa.is-a.dev/en/projects/clinical-platform/" color="#136B5C">Case study</link>  |  '
            '<link href="https://github.com/RadikeCosa/kinesiologiaadomicilio" color="#136B5C">Code</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Home rehabilitation landing page",
        "Public site · Analysis and implementation | Next.js, TypeScript, Tailwind CSS",
        [
            "Responsive landing page for a home-rehabilitation service in Neuquén, with technical SEO, analytics, and WhatsApp contact.",
            '<link href="https://ramirocosa.is-a.dev/en/projects/home-rehabilitation-landing/" color="#136B5C">Case study</link>  |  '
            '<link href="https://kinesiologiaadomicilio.vercel.app/" color="#136B5C">Live site</link>  |  '
            '<link href="https://github.com/RadikeCosa/kinesiologiaadomicilio" color="#136B5C">Code</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Family Games",
        "Two games published | Next.js, TypeScript, Supabase, PostgreSQL",
        [
            "Designed mobile-first flows to set up and play Impostor and Tutti Frutti across multiple phones.",
            "Impostor validates roles, voting, and scoring with PostgreSQL, RLS, and RPCs; Realtime syncs play and sessions recover after disconnections.",
            "Impostor has been played in more than 100 family games; observing them helped refine copy and flows.",
            '<link href="https://ramirocosa.is-a.dev/en/projects/family-games/" color="#136B5C">Case study</link>  |  '
            '<link href="https://juegos-familiares.vercel.app/" color="#136B5C">Live site</link>  |  '
            '<link href="https://github.com/RadikeCosa/juegos-familiares" color="#136B5C">Code</link>',
        ],
    ),
    Spacer(1, 2),
    item(
        "Fira Estudio",
        "Independent work | Next.js, TypeScript, Supabase, Playwright",
        [
            "Designed and built a responsive catalog, adapting the scope from e-commerce to fit the business's operating needs.",
            "Worked on accessibility, SEO, metadata, and unit and E2E tests.",
            '<link href="https://ramirocosa.is-a.dev/en/projects/fira-estudio/" color="#136B5C">Case study</link>  |  '
            '<link href="https://fira-estudio-cyan.vercel.app/" color="#136B5C">Live site</link>  |  '
            '<link href="https://github.com/RadikeCosa/fira-estudio" color="#136B5C">Code</link>',
        ],
    ),
    *section_title("Areas of work"),
    Paragraph(
        "<b>Product and UX:</b> discovery, workflows, states, business rules, scope, and operational experience.<br/>"
        "<b>Frontend and data:</b> TypeScript, JavaScript, React, Next.js, HTML/CSS, PostgreSQL, and Supabase.<br/>"
        "<b>Quality:</b> Vitest, Playwright, unit and E2E testing, RLS/authorization, Git, and documentation.",
        compact,
    ),
    PageBreak(),
    *section_title("Professional experience"),
    Paragraph("Healthcare experience since 2004 and digital products since 2020.", meta),
    item(
        "Digital product development",
        "Own products and independent work · Alongside healthcare practice | 2020 - Present",
        [
            "Needs analysis and workflow and business-rule definition; web development and data modeling.",
            "Automated testing, documentation, version control, deployment, and maintenance.",
        ],
    ),
    Spacer(1, 7),
    item(
        "Healthcare service coordination, review, and processes",
        "Alegra Salud and other home care services | 2013 - 2024",
        [
            "Coordinated patients, families, clinicians, and administrative teams; reviewed service delivery and documentation needs.",
            "Took part in the joint creation of a palliative care service area.",
        ],
    ),
    Spacer(1, 7),
    item(
        "Clinical practice and rehabilitation",
        "Independent practice | 2004 - Present",
        [
            "Functional assessment, treatment planning, and follow-up; clinic-based work through 2013, followed by practice outside clinic settings.",
            "Clinical and sports rehabilitation with different teams and high-performance athletes.",
        ],
    ),
    *section_title("Education"),
    Paragraph("<b>Full Stack Open</b> | University of Helsinki | 2025 - Present", compact),
    Paragraph("<b>Software Testing and Quality Assurance</b> | Egg / Argentina Programa | 2023", compact),
    Paragraph("<b>Diploma in Full Stack Web Programming</b> | National Technological University | 2022", compact),
    Paragraph("<b>Full Stack Programming</b> | Egg / Argentina Programa | 2021 - 2022", compact),
    Paragraph("<b>Introductory Web Programmer / Front End Developer</b> | National Technological University | 2021", compact),
    Paragraph("<b>Bachelor's Degree in Kinesiology and Physiotherapy</b> | National University of Córdoba | 1998 - 2003", compact),
    *section_title("Languages"),
    Paragraph("Spanish: Native | English: C1 Advanced - EF SET 64/100", body),
]

doc.build(story, onFirstPage=footer, onLaterPages=footer)
