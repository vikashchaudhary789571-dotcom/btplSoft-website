import { Link } from 'react-router-dom'
import {
  Cpu, Layers, Zap, Shield, RefreshCw, BarChart2,
  CheckCircle, Users, Clock, Award, Headphones, TrendingUp,
  Globe, Lock, Activity, Package, Server, Settings, Database, ArrowRight
} from 'lucide-react'
import '../services/ServicePage.css'
import './TensorFlow.css'
import tfBanner from '../../assets/services/human-ai-touch-connection-technology-innovation.webp'

const services = [
  {
    icon: <Cpu size={22} />,
    badge: 'Deep Learning',
    title: 'Deep Learning Model Development',
    desc: 'Our ML engineers design, train, and optimise deep neural networks — CNNs for image recognition, RNN/LSTMs for sequential data, Transformers for text and vision, and hybrid architectures for multimodal inputs. We implement model architectures from scratch using TF2/Keras, configure custom training loops with tf.GradientTape for research-grade control, and apply regularisation techniques (dropout, BatchNorm, L2) to prevent overfitting on limited training datasets. Every model ships with reproducible training scripts, frozen weight exports, and documented hyperparameter search results.',
    chips: ['CNN', 'RNN / LSTM', 'Transformer', 'Autoencoder', 'GAN'],
  },
  {
    icon: <Activity size={22} />,
    badge: 'Computer Vision',
    title: 'Computer Vision & Image Intelligence',
    desc: 'We build production computer vision systems that go far beyond simple image classification — including real-time object detection (YOLO, EfficientDet), instance segmentation (Mask R-CNN), semantic segmentation for autonomous systems, facial recognition for identity verification, optical character recognition (OCR) for document digitisation, and anomaly detection for industrial quality control. Our pipelines handle data augmentation with tf.image, class imbalance, and mixed-precision training on multi-GPU setups to achieve accuracy benchmarks that rival cloud AutoML services at a fraction of the operational cost.',
    chips: ['Object Detection', 'YOLO / EfficientDet', 'Segmentation', 'OCR', 'Anomaly Detection'],
  },
  {
    icon: <Layers size={22} />,
    badge: 'NLP',
    title: 'Natural Language Processing',
    desc: 'We deploy TensorFlow-powered NLP solutions — from transformer fine-tuning (BERT, RoBERTa, DistilBERT) for document classification, named entity recognition, and sentiment analysis, to custom sequence-to-sequence models for machine translation and abstractive summarisation. Our engineers integrate TensorFlow Text for preprocessing pipelines, use TF Hub pre-trained embeddings, and export fine-tuned models through TF Serving for latency-critical API inference. We have built NLP systems processing 10M+ documents daily in fintech, legal, and healthcare compliance platforms.',
    chips: ['BERT Fine-tuning', 'NER', 'Sentiment Analysis', 'Text Classification', 'TF Hub'],
  },
  {
    icon: <Globe size={22} />,
    badge: 'Deployment',
    title: 'MLOps & Model Deployment Pipeline',
    desc: 'A model that lives only in a Jupyter notebook creates zero business value. We architect end-to-end MLOps pipelines using TensorFlow Extended (TFX) — automating data validation with TFDV, feature engineering with TF Transform, model evaluation with TFMA, and model pushing to TF Serving. Our Kubernetes-native model serving configurations handle auto-scaling, A/B testing between model versions, canary deployments, and multi-model serving. We instrument all deployments with Prometheus/Grafana dashboards tracking inference latency, throughput, and model drift metrics.',
    chips: ['TFX Pipeline', 'TF Serving', 'Model Versioning', 'A/B Testing', 'Model Drift'],
  },
  {
    icon: <RefreshCw size={22} />,
    badge: 'Transfer Learning',
    title: 'Transfer Learning & Fine-Tuning',
    desc: 'Training deep neural networks from random initialisation requires millions of labelled examples and weeks of GPU compute. Transfer learning solves both problems — our engineers freeze and fine-tune pre-trained weights from ImageNet (EfficientNet, ResNet, MobileNet), BERT, and GPT-2 available through TF Hub for your specific domain task with as few as 500 labelled examples. We apply layer-wise learning rate decay, gradual unfreezing, and data augmentation strategies to prevent catastrophic forgetting — consistently achieving 90%+ task accuracy on domain-specific datasets through careful transfer methodology.',
    chips: ['EfficientNet', 'ResNet', 'MobileNet', 'TF Hub', 'Domain Adaptation'],
  },
  {
    icon: <Zap size={22} />,
    badge: 'Edge / Mobile',
    title: 'TFLite Edge & Mobile AI Deployment',
    desc: 'We convert TensorFlow models to TFLite flatbuffer format with post-training quantisation (int8, float16) and full-integer quantisation for deployment on Android, iOS, Raspberry Pi, microcontrollers, and Coral Edge TPU hardware. Our edge AI pipelines achieve 3–5x latency improvements and 75% model size reduction without meaningful accuracy loss. We implement hardware delegate acceleration — NNAPI on Android, Core ML on iOS, and GPU delegate for mobile GPUs — to maximise inference speed on battery-constrained devices. Used in retail shelf analytics, industrial inspection cameras, and wearable health monitoring devices.',
    chips: ['TFLite', 'Quantisation', 'NNAPI Delegate', 'Core ML', 'Edge TPU'],
  },
]

const whyTF = [
  {
    icon: <Globe size={22} />,
    title: 'Production-First Design Philosophy',
    desc: 'TensorFlow was engineered from day one for production at Google scale — TF Serving handles millions of inference requests per second, TFLite runs on billions of Android devices, and TF.js executes models in the browser with GPU acceleration via WebGL. The TFX pipeline platform automates every stage from data ingestion to model monitoring, eliminating the "training-serving skew" that plagues ad-hoc ML deployments.',
  },
  {
    icon: <Layers size={22} />,
    title: 'Keras: The Fastest Path from Idea to Model',
    desc: 'Keras is now the official high-level API bundled with TensorFlow, providing intuitive Sequential and Functional APIs alongside the Subclassing API for fully custom model architectures. Keras Tuner performs automated hyperparameter optimisation across learning rate, architecture depth, and regularisation simultaneously. Keras Applications ships 18+ pre-built architectures ready for transfer learning, and tf.keras.callbacks provides ModelCheckpoint, EarlyStopping, and TensorBoard integration out-of-the-box.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Native TPU & Multi-GPU Acceleration',
    desc: 'TensorFlow is the only major ML framework with native first-party TPU support — Google Tensor Processing Units deliver 40–100x training speedups over single GPUs for models with large batch sizes and matrix multiplications. tf.distribute.Strategy abstracts distributed training across MirroredStrategy (multi-GPU single machine), MultiWorkerMirroredStrategy (multi-node GPU cluster), and TPUStrategy with identical API surface — no framework rewrite needed when scaling from laptop to cloud.',
  },
  {
    icon: <BarChart2 size={22} />,
    title: 'TensorBoard: Unmatched Training Visibility',
    desc: "TensorBoard provides interactive dashboards for loss curves, weight histograms, activation distributions, confusion matrices, PR/ROC curves, image sample previews, and architecture computation graphs — all in real time during training. The What-If Tool embedded in TensorBoard enables interactive model behaviour exploration without any code changes. TensorBoard.dev provides public experiment sharing, enabling reproducibility across research teams and clients.",
  },
  {
    icon: <Shield size={22} />,
    title: 'Enterprise-Grade Ecosystem & Support',
    desc: "TensorFlow is maintained by Google Brain, Google DeepMind, and hundreds of enterprise contributors — ensuring long-term stability, security patches, and compatibility guarantees incompatible with niche research frameworks. TensorFlow Enterprise on Google Cloud provides LTS releases, commercial support SLAs, and validated container images for regulated industries. The 50,000+ research papers, Stack Overflow answers, and pre-trained model zoo on TF Hub represent unmatched community knowledge.",
  },
  {
    icon: <Activity size={22} />,
    title: 'TF.js: AI That Runs in the Browser',
    desc: "TensorFlow.js enables model training and inference entirely in the browser using WebGL GPU acceleration — no server required for inference. Convert any Python TensorFlow SavedModel to TF.js format and serve it from a CDN, eliminating infrastructure costs and data privacy concerns for on-device inference use cases like face filters, pose estimation, and handwriting recognition. Node.js bindings extend TF.js to server-side inference with native C++ TensorFlow bindings.",
  },
]

const tfProducts = [
  { icon: <Cpu size={20} />, name: 'TensorFlow 2.x', desc: 'Core deep learning framework + eager mode' },
  { icon: <Layers size={20} />, name: 'Keras', desc: 'High-level model building API' },
  { icon: <Globe size={20} />, name: 'TF Serving', desc: 'Production model serving at scale' },
  { icon: <Package size={20} />, name: 'TFLite', desc: 'Mobile & edge optimised inference' },
  { icon: <BarChart2 size={20} />, name: 'TensorBoard', desc: 'Interactive training visualisation' },
  { icon: <Activity size={20} />, name: 'TF.js', desc: 'JavaScript / browser ML inference' },
  { icon: <Server size={20} />, name: 'TFX (Extended)', desc: 'End-to-end MLOps pipeline platform' },
  { icon: <Database size={20} />, name: 'TF Hub', desc: '1000+ pre-trained shareable models' },
]

const expItems = [
  'Multi-GPU distributed training pipelines on GCP Vertex AI',
  'TFLite int8 quantisation for on-device inference on Android',
  'BERT fine-tuning for legal document NER with 94% F1 score',
  'Real-time object detection system processing 30fps CCTV streams',
  'TFX end-to-end MLOps pipeline with automated model retraining',
  'Computer vision defect detection for automotive manufacturing QA',
  'TF Serving REST + gRPC API serving 50k+ predictions per second',
  'GANs for synthetic medical image data augmentation',
  'Transfer learning with EfficientNetV2 for custom 500-class classifier',
  'Model drift monitoring with TFMA + Vertex AI Model Monitoring',
  'TensorBoard collaborative experiment tracking across distributed team',
  'TF.js pose estimation for browser-native physiotherapy app',
]

const expTags = [
  'TensorFlow 2.x', 'Keras', 'TF Serving', 'TFLite',
  'TFX', 'TF Hub', 'TensorBoard', 'TF.js',
  'BERT', 'EfficientNet', 'YOLO', 'Vertex AI',
  'Multi-GPU', 'TPU', 'Quantisation', 'SavedModel',
]

const btplCards = [
  {
    icon: <Award size={24} />,
    title: 'TensorFlow Certified Engineers',
    desc: 'Our ML engineers hold Google TensorFlow Developer Certificates and have shipped production TensorFlow models in healthcare, fintech, logistics, and e-commerce — with documented accuracy benchmarks and production SLA track records.',
  },
  {
    icon: <Users size={24} />,
    title: 'End-to-End MLOps Delivery',
    desc: 'We do not just build models — we build pipelines. Every TensorFlow project we deliver includes data validation, CI/CD model retraining triggers, cloud deployment, monitoring dashboards, and rollback procedures as standard.',
  },
  {
    icon: <Clock size={24} />,
    title: 'GPU & TPU Resource Optimisation',
    desc: 'Our engineers profile training runs with TensorBoard Profiler and optimise data loading, mixed-precision training, gradient checkpointing, and XLA compilation — reducing training cost by 40–60% without sacrificing model accuracy.',
  },
  {
    icon: <Headphones size={24} />,
    title: 'Ongoing Model Maintenance',
    desc: 'Models degrade as production data distributions shift. We provide quarterly model retraining, data drift alerts, A/B test coordination, and TensorFlow version upgrade management as a fully managed ML operations service.',
  },
]

export default function TensorFlow() {
  return (
    <div className="sp-page">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="sp-hero" style={{ backgroundImage: `url(${tfBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="sp-hero-overlay" />
        <div className="sp-container">
          <h1 className="sp-hero-title">TensorFlow <span>AI & ML Solutions</span></h1>
          <p className="sp-hero-desc">
            BTPL Soft's TensorFlow-certified engineers design, train, and deploy production-grade deep learning models —
            from computer vision and NLP to MLOps pipelines and edge AI on TFLite — powering intelligent applications
            that scale from prototype to millions of daily predictions.
          </p>
          <div className="sp-hero-actions">
            <Link to="/contact" className="sp-btn-primary">Start Your AI Project <Cpu size={18} /></Link>
            <Link to="/services" className="sp-btn-secondary">Explore Services</Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="tf-stats">
        <div className="tf-stats-grid sp-container">
          {[
            { num: '120+', label: 'AI Models Deployed' },
            { num: '500M+', label: 'Predictions Served Daily' },
            { num: '94%+', label: 'Avg Model Accuracy' },
            { num: '8+', label: 'Years ML Experience' },
          ].map(s => (
            <div className="tf-stat" key={s.label}>
              <span className="tf-stat-num">{s.num}</span>
              <span className="tf-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section className="sp-section sp-bg-white" id="services">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">What We Build</p>
            <h2 className="sp-heading">TensorFlow Development Services</h2>
            <p className="sp-sub">
              End-to-end TensorFlow expertise — from deep learning architecture design and transfer learning
              to TFX production pipelines, TF Serving deployment, and TFLite edge AI — all delivered by
              certified ML engineers with production deployment experience.
            </p>
          </div>
          <div className="tf-svc-grid">
            {services.map(svc => (
              <div className="tf-svc-card" key={svc.title}>
                <div className="tf-svc-header">
                  <div className="tf-svc-icon">{svc.icon}</div>
                  <div className="tf-svc-header-text">
                    <div className="tf-svc-title">{svc.title}</div>
                    <span className="tf-svc-badge">{svc.badge}</span>
                  </div>
                </div>
                <div className="tf-svc-body">
                  <p>{svc.desc}</p>
                  <div className="tf-svc-chips">
                    {svc.chips.map(c => <span className="tf-svc-chip" key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY TENSORFLOW ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why TensorFlow</p>
            <h2 className="sp-heading">Why Choose TensorFlow?</h2>
            <p className="sp-sub">
              TensorFlow is Google's production-proven ML platform — running on billions of Android devices, powering
              Search, Translate, and Photos at zero-millisecond latency, and trusted by Apple, Twitter, and Uber
              for their most demanding AI workloads.
            </p>
          </div>
          <div className="tf-why-grid">
            {whyTF.map(w => (
              <div className="tf-why-card" key={w.title}>
                <div className="tf-why-icon">{w.icon}</div>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ECOSYSTEM ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Ecosystem</p>
            <h2 className="sp-heading">TensorFlow Ecosystem We Master</h2>
            <p className="sp-sub">
              From core TF2 and Keras to TFX production pipelines, TFLite edge deployment, and TF.js
              browser inference — we leverage the complete TensorFlow platform to match every AI use case.
            </p>
          </div>
          <div className="tf-products-grid">
            {tfProducts.map(p => (
              <div className="tf-product-card" key={p.name}>
                <div className="tf-product-icon">{p.icon}</div>
                <div className="tf-product-name">{p.name}</div>
                <div className="tf-product-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ EXPERIENCE ══════════════════ */}
      <section className="sp-section">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Our Expertise</p>
            <h2 className="sp-heading">Deep TensorFlow Engineering Experience</h2>
            <p className="sp-sub">
              From research prototypes to enterprise-scale ML platforms — our TensorFlow engineers have solved
              every training, deployment, and monitoring challenge across healthcare, fintech, manufacturing,
              and e-commerce verticals.
            </p>
          </div>
          <div className="tf-exp-wrap">
            <ul className="tf-exp-list">
              {expItems.map(item => (
                <li className="tf-exp-item" key={item}><CheckCircle size={16} />{item}</li>
              ))}
            </ul>
            <div className="tf-exp-tags">
              {expTags.map(t => <span className="tf-exp-tag" key={t}>{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ WHY BTPL ══════════════════ */}
      <section className="sp-section sp-bg-white">
        <div className="sp-container">
          <div className="sp-section-head center">
            <p className="sp-label">Why Choose Us</p>
            <h2 className="sp-heading">Why BTPL for TensorFlow?</h2>
            <p className="sp-sub">
              Certified ML engineers, production-first MLOps delivery, and GPU/TPU cost optimisation expertise —
              building TensorFlow solutions that go live, stay accurate, and scale without incident.
            </p>
          </div>
          <div className="tf-btpl-grid">
            {btplCards.map(c => (
              <div className="tf-btpl-card" key={c.title}>
                <div className="tf-btpl-icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="sp-section" style={{ background: 'linear-gradient(135deg, #1B1B2F, #2D1B4E)' }}>
        <div className="sp-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '18px' }}>
            Ready to Build Your AI Solution with TensorFlow?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.65)', maxWidth: '660px', margin: '0 auto 36px', lineHeight: 1.8 }}>
            Whether you're starting a greenfield deep learning project, optimising a slow model, or building an
            MLOps pipeline — BTPL Soft's TensorFlow engineers are ready to accelerate your AI roadmap.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => window.dispatchEvent(new CustomEvent('openConsultModal'))} className="sp-btn-primary">Get Free Consultation <ArrowRight size={18} /></button>
          </div>
        </div>
      </section>

    </div>
  )
}
