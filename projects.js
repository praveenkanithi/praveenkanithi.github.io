const projects = [
  {
    title: "BioToken & BioFM: Biologically-Informed Genomic Foundation Modeling",
    description: "A modular tokenization framework and foundation model that integrate biological structure and function directly into genomic representations.",
    highlights: [
      "State-of-the-art performance on diverse genomic prediction tasks",
      "Substantially reduced computational cost through biologically-informed inductive biases",
      "Enhanced generalization across molecular phenotypes",
    ],
    image: { src: "figures/biotoken_biofm.png", alt: "BioToken and BioFM Framework Architecture" },
    links: [
      { label: "Paper", url: "https://www.biorxiv.org/content/10.1101/2025.03.27.645711v1" },
      { label: "Code",  url: "https://github.com/m42-health/biofm-eval/" },
      { label: "Model", url: "https://huggingface.co/m42-health/BioFM-265M" },
    ],
  },
  {
    title: "MEDIC: Multidimensional Evaluation of Clinical LLMs",
    description: "A comprehensive framework for evaluating large language models in healthcare across multiple dimensions.",
    highlights: [
      "Evaluates reasoning, ethics, safety, and language understanding",
      "Novel cross-examination approach for hallucination detection without reference outputs",
      "Presented at NVIDIA GTC 2025",
    ],
    image: { src: "figures/MEDIC_framework.png", alt: "MEDIC Evaluation Framework Diagram" },
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2409.07314" },
      { label: "Demo",  url: "https://huggingface.co/spaces/m42-health/MEDIC-Benchmark" },
    ],
  },
  {
    title: "Med42: Open Medical Language Models",
    description: "Building and refining open medical language models through clinical domain adaptation and alignment.",
    highlights: [
      "Improved clinical reasoning, factual accuracy, and safety",
      "Open and reproducible resources for the research community",
      "Published at AAAI Clinical LLM Symposium",
    ],
    image: { src: "figures/med42.png", alt: "Med42 Medical Language Model Architecture" },
    links: [
      { label: "Paper", url: "https://arxiv.org/pdf/2408.06142" },
      { label: "Model", url: "https://huggingface.co/m42-health/Llama3-Med42-70B" },
    ],
  },
  {
    title: "CXformer: Efficient Scaling of Vision Transformers for Chest X-ray Analysis",
    description: "Adapting vision transformer architectures for clinical imaging, building on DINOv2 through targeted refinements.",
    highlights: [
      "Improved efficiency and performance on major chest X-ray benchmarks",
      "Demonstrates training optimizations can outweigh raw scaling",
      "Competitive results across classification, segmentation, and report generation",
    ],
    image: { src: "figures/CXformer.png", alt: "CXformer Vision Transformer Performance Chart" },
    links: [
      { label: "Paper", url: "https://openreview.net/pdf?id=6fqfInxqG1" },
      { label: "Code",  url: "https://github.com/m42-health/CXformer/" },
      { label: "Model", url: "https://huggingface.co/m42-health/CXformer-base" },
    ],
  },
];

function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects.map(p => `
    <div class="project">
      <h3>${p.title}</h3>
      <p class="project-description">${p.description}</p>
      <ul class="project-highlights">
        ${p.highlights.map(h => `<li>${h}</li>`).join("")}
      </ul>
      <div class="project-image">
        <img src="${p.image.src}" alt="${p.image.alt}" class="project-img">
      </div>
      <div class="project-links">
        ${p.links.map(l => `<a href="${l.url}" target="_blank">${l.label}</a>`).join("")}
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);
