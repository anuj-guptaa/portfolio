# Project Media Assets

This folder contains images and videos for the project cards displayed in the portfolio.

## Required Files

Add the following image files to this folder (recommended format: JPG or PNG):

- `k8s-architecture.jpg` - Kubernetes Multi-Cluster Architecture project
- `cicd-pipeline.jpg` - Full CI/CD Pipeline project
- `iac-migration.jpg` - Infrastructure as Code Migration project
- `observability-stack.jpg` - Observability & Monitoring Stack project
- `database-layer.jpg` - High-Performance Database Layer project
- `microservices.jpg` - Microservices Backend System project
- `data-pipeline.jpg` - Real-time Data Processing Pipeline project
- `mlops-platform.jpg` - MLOps Platform for Model Serving project
- `llm-rag.jpg` - LLM Application & RAG Pipeline project

## Image Specifications

- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 or 4:3 (landscape orientation works best)
- **Resolution**: Minimum 800x450px, recommended 1200x675px
- **Content**: Screenshots, diagrams, or representative images of your projects

## Video Support (Optional)

If you prefer videos instead of images for any project, you can use MP4 files:

```javascript
// In Projects.jsx, change the media object:
media: {
  type: 'video',
  src: '/projects/project-video.mp4'
}
```

Video features:
- Auto-plays on hover
- Loops continuously
- Muted by default
- Optimized for web playback

## Fallback

If no media is provided, the component will fall back to displaying emojis as before.

## Examples

### Image Example:
```javascript
media: {
  type: 'image',
  src: '/projects/k8s-architecture.jpg'
}
```

### Video Example:
```javascript
media: {
  type: 'video',
  src: '/projects/demo-video.mp4'
}
```

## Hot Reload

After adding images/videos, your development server will automatically detect changes and reload the portfolio.