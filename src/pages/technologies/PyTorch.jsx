import { Link } from 'react-router-dom'
import {
  Cpu, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, Database, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './PyTorch.css'
import ptBanner from '../../assets/services/dedicated-businessman-working-late-laptop-dark-office.webp'

const services = [
  {
    num: '01',
    icon: <Cpu size={22} />,
    title: 'Custom Deep Learning Research & Prototyping',
    desc: 'PyTorch\'s dynamic computation graph (eager mode) makes it the undisputed choice for research and rapid prototyping — you can inspect tensors, modify the graph mid-forward-pass, and debug with Python pdb like any normal code. Our ML researchers implement novel architectures from academic papers — attention mechanisms, diffusion models, graph neural networks, and multimodal encoders — in PyTorch within days, not weeks. We use Jupyter notebooks with GPU-backed kernels on AWS SageMaker or Google Colab Pro+ for interactive experimentation, with Weights & Biases or MLflow for experiment tracking and hyperparameter sweep visualisation across dozens of parallel runs.',
    chips: ['Dynamic Graph', 'Custom Autograd', 'Paper Implementation', 'W&B / MLflow', 'Jupyter + GPU'],
  },
  {
    num: '02',
    icon: <Activity size={22} />,
    title: 'Computer Vision with TorchVision',
    desc: 'TorchVision ships production-ready pre-trained architectures — ResNet50, EfficientNet, ViT (Vision Transformer), Swin Transformer, and DETR — that our engineers fine-tune on your domain-specific image datasets using graduated unfreezing and discriminative learning rates. We build real-time video inference pipelines using CUDA-accelerated torchvision.transforms with automatic batching and multi-threaded DataLoader pipelines that saturate GPU throughput without CPU bottlenecks. Specialisations include medical imaging (DICOM, X-ray, fundus), satellite imagery classification, retail planogram compliance, and industrial surface inspection.',
    chips: ['ResNet / EfficientNet', 'ViT / Swin Transformer', 'DETR / YOLO', 'DataLoader Pipeline', 'CUDA Inference'],
  },
  {
    num: '03',
    icon: <Layers size={22} />,
    title: 'NLP & Large Language Model Fine-Tuning',
    desc: 'We fine-tune open-source Large Language Models — Llama 3, Mistral, Falcon, Gemma — using HuggingFace\'s PyTorch Trainer API with LoRA (Low-Rank Adaptation) and QLoRA 4-bit quantisation for parameter-efficient fine-tuning on consumer-grade GPUs. Our NLP engineers build BERT, RoBERTa, and DeBERTa classifiers for document routing, compliance screening, and customer intent detection, as well as seq2seq T5/BART models for abstractive summarisation and instruction-tuned chatbots for customer support automation. All models are evaluated with comprehensive benchmarks before production deployment.',
    chips: ['Llama / Mistral Fine-tuning', 'LoRA / QLoRA', 'BERT / DeBERTa', 'HuggingFace', 'RAG Pipelines'],
  },
  {
    num: '04',
    icon: <Globe size={22} />,
    title: 'Production Deployment with TorchServe',
    desc: 'TorchServe is PyTorch\'s native model server — we deploy trained models as RESTful and gRPC inference endpoints with TorchScript JIT compilation for 2–4x latency improvements, asynchronous batching to maximise GPU utilisation, and multi-model serving with separate worker thread pools per model. We containerise TorchServe deployments with NVIDIA GPU-enabled Docker images on Kubernetes with Horizontal Pod Autoscaling tied to GPU queue depth metrics. For lowest-latency inference, we also support ONNX Runtime export and NVIDIA TensorRT conversion achieving sub-5ms P99 latency on A10G GPU instances.',
    chips: ['TorchServe', 'TorchScript JIT', 'ONNX Runtime', 'TensorRT', 'Kubernetes GPU'],
  },
  {
    num: '05',
    icon: <RefreshCw size={22} />,
    title: 'Distributed Training with PyTorch Lightning',
    desc: 'PyTorch Lightning abstracts multi-GPU and multi-node distributed training into a clean Trainer API — eliminating the boilerplate of DDP (DistributedDataParallel) setup while exposing full customisation hooks for gradient accumulation, precision management, and callback-based training lifecycle. We architect Lightning training pipelines with automatic mixed precision (AMP), gradient checkpointing for memory-efficient large model training, and DeepSpeed ZeRO Stage 3 integration for models exceeding single-GPU VRAM. Training runs on AWS EC2 p4d instances (8x A100 80GB) are coordinated with NCCL collective communications and S3 checkpoint storage.',
    chips: ['PyTorch Lightning', 'DDP / FSDP', 'DeepSpeed ZeRO', 'Mixed Precision', 'Multi-Node GPU'],
  },
  {
    num: '06',
    icon: <Zap size={22} />,
    title: 'Reinforcement Learning & Generative AI',
    desc: 'We implement reinforcement learning environments and training loops using PyTorch for custom reward functions — from recommender system exploration-exploitation tuning to robotic simulation agents in IsaacGym and Gymnasium. For generative AI, we design and train Diffusion Models (DDPM, Stable Diffusion fine-tuning), VAEs for anomaly detection and latent space manipulation, and GAN variants (StyleGAN, CycleGAN, Pix2Pix) for image synthesis, style transfer, and data augmentation applications in healthcare and automotive design.',
    chips: ['PPO / SAC / DQN', 'Stable Diffusion', 'GAN / VAE', 'DDPM', 'Gymnasium'],
  },
]

const whyPT = [
  {
    icon: <Zap size={22} />,
    title: 'Dynamic Graphs — Debug Like Normal Python',
    desc: 'PyTorch\'s define-by-run approach builds the computation graph dynamically with each forward pass — meaning you can use Python control flow (if/for loops), inspect intermediate tensors with simple print statements, and step through your model with pdb. For researchers implementing novel architectures with variable-length sequences, sparse operations, or conditional computation paths, dynamic graphs eliminate hours of static graph debugging that TensorFlow 1.x required.',
  },
  {
    icon: <Layers size={22} />,
    title: 'HuggingFace Ecosystem — 500,000+ Models',
    desc: 'PyTorch is the native backend for HuggingFace\'s Transformers library — home to 500,000+ pre-trained models spanning BERT, GPT-4, Llama, Stable Diffusion, Whisper, and SAM. The HuggingFace Hub provides standardised loading, tokenisation, and inference APIs across every major NLP and vision task, reducing days of model integration work to three lines of Python. Datasets, Evaluate, and PEFT libraries extend this to training data management, evaluation metrics, and parameter-efficient fine-tuning.',
  },
  {
    icon: <Activity size={22} />,
    title: 'Research Community\'s Preferred Framework',
    desc: 'Over 75% of AI papers on ArXiv include PyTorch code implementations — meaning state-of-the-art techniques are available in PyTorch weeks before other frameworks. NeurIPS, ICML, ICLR, and CVPR workshops universally accept PyTorch code submissions. OpenAI (GPT), Meta AI (Llama), Stability AI (Stable Diffusion), and Mistral all release primary codebases in PyTorch — giving companies using PyTorch first access to cutting-edge model weights and training code.',
  },
  {
    icon: <Globe size={22} />,
    title: 'ONNX Portability Across Every Runtime',
    desc: 'PyTorch\'s torch.onnx.export converts any model to ONNX format, enabling deployment across ONNX Runtime (CPU/GPU), TensorRT (NVIDIA GPU), OpenVINO (Intel hardware), CoreML (Apple Silicon), and TFLite (mobile) without rewriting training code for each target platform. This framework portability eliminates vendor lock-in and enables model reuse across heterogeneous deployment environments — training in PyTorch, serving optimally on each target hardware.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'PyTorch 2.0 — torch.compile 2x Faster',
    desc: 'PyTorch 2.0 introduced torch.compile — a one-line decorator that applies graph capture, TorchInductor optimisation, and hardware-specific kernel generation to automatically deliver 30–200% training speedups without changing model code. Combined with FSDP (Fully Sharded Data Parallelism) for 100B+ parameter model training and TorchDynamo\'s dynamic shape support, PyTorch 2.x matches or exceeds XLA compilation speeds while preserving full Python debuggability.',
  },
  {
    icon: <Shield size={22} />,
    title: 'Strong Industry Adoption & Long-Term Support',
    desc: 'PyTorch is backed by Meta\'s fundamental AI Research (FAIR) team and the PyTorch Foundation — an independent governance body under the Linux Foundation with Microsoft, Google, Amazon, NVIDIA, and AMD as Premier members. This ensures long-term hardware support commitments from every major GPU and accelerator vendor. PyTorch core has strict backward compatibility policies and LTS release branches for production stability over multi-year model lifecycles.',
  },
]

const ptProducts = [
  { icon: <Cpu size={20} />, name: 'PyTorch 2.x', desc: 'Core framework + torch.compile' },
  { icon: <Activity size={20} />, name: 'TorchVision', desc: 'Computer vision datasets & transforms' },
  { icon: <Layers size={20} />, name: 'HuggingFace Transformers', desc: '500k+ pre-trained NLP/vision models' },
  { icon: <Globe size={20} />, name: 'TorchServe', desc: 'Native PyTorch model serving' },
  { icon: <Zap size={20} />, name: 'PyTorch Lightning', desc: 'Distributed training abstraction' },
  { icon: <Package size={20} />, name: 'ONNX Runtime', desc: 'Cross-platform model inference' },
  { icon: <Settings size={20} />, name: 'Weights & Biases', desc: 'Experiment tracking + visualisation' },
  { icon: <Server size={20} />, name: 'DeepSpeed', desc: 'Billion-parameter model training' },
]

const expItems = [
  'Llama 3 fine-tuning with QLoRA for legal document Q&A chatbot',
  'Real-time pose estimation on edge device with TorchScript export',
  'Multi-GPU DDP training on 8x A100s for medical image segmentation',
  'Stable Diffusion fine-tuning for product image variation generation',
  'TorchServe deployment with batching at 5ms P99 on A10G GPU',
  'BERT-based multi-label document classifier for compliance screening',
  'Custom GAN for synthetic retail shelf image data augmentation',
  'PyTorch Lightning NLP training pipeline with W&B hyperparameter search',
  'ONNX export to TensorRT for 4x inference speedup on NVIDIA Jetson',
  'Recommendation system with RL exploration using PPO agent',
  'Distributed training with FSDP for 13B parameter instruction-tuned model',
  'RAG pipeline integrating LLM with vector database for enterprise search',
]

const expTags = [
  'PyTorch 2.x', 'HuggingFace', 'Llama 3', 'Stable Diffusion',
  'TorchServe', 'TorchScript', 'ONNX', 'TensorRT',
  'PyTorch Lightning', 'DeepSpeed', 'LoRA / QLoRA', 'FSDP',
  'TorchVision', 'DDP', 'Gymnasium', 'W&B',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'PyTorch + HuggingFace Specialists',
    desc: 'Our ML engineers have shipped production PyTorch models in healthcare NLP, e-commerce recommendation, and industrial computer vision — with documented benchmark results and A/B test impact metrics for every deployed model.',
  },
  {
    icon: <Users size={24} />,
    title: 'Research to Production Pipeline',
    desc: 'We bridge the prototype-production gap — taking research PyTorch notebooks through systematic testing, TorchScript compilation, containerisation, and Kubernetes deployment with monitoring, model versioning, and rollback procedures.',
  },
  {
    icon: <Clock size={24} />,
    title: 'LLM Fine-Tuning Expertise',
    desc: 'We fine-tune Llama, Mistral, and Falcon with LoRA/QLoRA on domain-specific datasets — with systematic evaluation using ROUGE, BERTScore, and human eval benchmarks to ensure fine-tuned models outperform base models on your specific task.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Ongoing Model Operations',
    desc: 'Production AI requires ongoing attention — we provide quarterly retraining, data drift monitoring, A/B test management, and PyTorch version migration as a managed service so your models stay accurate in changing production environments.',
  },
]

export default function PyTorch() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${ptBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">PyTorch <span>AI & ML Solutions</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's PyTorch specialists build and deploy state-of-the-art deep learning models — from
            transformer fine-tuning and computer vision to generative AI and production TorchServe deployments —
            using the framework trusted by Meta, OpenAI, Stability AI, and 75% of published AI research.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your PyTorch Project <Cpu size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="pt-stats">
        <div className="pt-stats-grid sp-container">
          {[
            { num: '100+', label: 'PyTorch Models Built' },
            { num: '75%+', label: 'ArXiv Papers in PyTorch' },
            { num: '8+', label: 'Years ML Experience' },
            { num: '500k+', label: 'HuggingFace Models' },
          ].map(s => (
            <div className="pt-stat" key={s.label}>
              <span className="pt-stat-num">{s.num}</span>
              <span className="pt-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">What We Build</p>
            <h2 className="sp-heading">PyTorch Development Services</h2>
            <p className="sp-subtext-large">
              Full-stack PyTorch expertise — from novel architecture research and LLM fine-tuning to distributed
              training, TorchServe production deployment, and ONNX cross-platform model export.
            </p>
          </div>
          <div className="pt-svc-list">
            {services.map(svc => (
              <div className="pt-svc-card" key={svc.title}>
                <div className="pt-svc-icon">{svc.icon}</div>
                <div className="pt-svc-content">
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <div className="pt-svc-chips">
                    {svc.chips.map(c => <span className="pt-svc-chip" key={c}>{c}</span>)}
                  </div>
                </div>
                <div className="pt-svc-num">{svc.num}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY PYTORCH ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why PyTorch</p>
            <h2 className="sp-heading">Why Choose PyTorch?</h2>
            <p className="sp-subtext-large">
              PyTorch has become the dominant ML research and production framework — powering GPT-4, Llama 3,
              Stable Diffusion, and the majority of cutting-edge AI models published and deployed worldwide.
            </p>
          </div>
          <div className="pt-why-grid">
            {whyPT.map(w => (
              <div className="pt-why-card" key={w.title}>
                <div className="pt-why-icon">{w.icon}</div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ECOSYSTEM ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Ecosystem</p>
            <h2 className="sp-heading">PyTorch Ecosystem We Master</h2>
            <p className="sp-subtext-large">
              From core PyTorch and HuggingFace Transformers to TorchServe deployment, DeepSpeed distributed
              training, and ONNX cross-platform export — the complete modern ML toolchain.
            </p>
          </div>
          <div className="pt-products-grid">
            {ptProducts.map(p => (
              <div className="pt-product-card" key={p.name}>
                <div className="pt-product-icon">{p.icon}</div>
                <div className="pt-product-name">{p.name}</div>
                <div className="pt-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ EXPERIENCE ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep PyTorch Engineering Experience</h2>
            <p className="sp-subtext-large">
              From LLM fine-tuning and diffusion model deployment to industrial computer vision and distributed
              training infrastructure — our PyTorch engineers have delivered production AI at every scale.
            </p>
          </div>
          <div className="pt-exp-wrap">
            <ul className="pt-exp-list">
              {expItems.map(item => (
                <li className="pt-exp-item" key={item}><CheckCircle size={16} />{item}</li>
              ))}
            </ul>
            <div className="pt-exp-tags">
              {expTags.map(t => <span className="pt-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY BTPL ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-overview-content">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for PyTorch?</h2>
            <p className="sp-subtext-large">
              Research-grade ML expertise, LLM fine-tuning experience, and full production deployment capability —
              taking your PyTorch models from notebook to monitored production serving infrastructure.
            </p>
          </div>
          <div className="pt-btpl-grid">
            {btplCards.map(c => (
              <div className="pt-btpl-card" key={c.title}>
                <div className="pt-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #1A0A00, #2D1000)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Build with PyTorch?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're fine-tuning an LLM, building a computer vision pipeline, or deploying a multi-GPU
            training infrastructure — BTPL Soft's PyTorch engineers deliver production-ready results fast.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
