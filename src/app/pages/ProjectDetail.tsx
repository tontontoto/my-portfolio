import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { findProjectBySlug } from '../data/projects';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const project = findProjectBySlug(slug);

  const detailLinks = project
    ? [
        ...(project.liveUrl
          ? [{ label: "作品URL", url: project.liveUrl, type: "external" as const }]
          : []),
        ...(project.githubUrl
          ? [{ label: "GitHub", url: project.githubUrl, type: "github" as const }]
          : []),
        ...(project.links ?? []).map((link) => ({
          ...link,
          type: "external" as const
        }))
      ]
    : [];

  if (!project) {
    return (
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link
            to="/#works"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            作品一覧に戻る
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">作品が見つかりません</h1>
          <p className="text-gray-500">URLが正しいか確認してください。</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-12">
        <Link
          to="/#works"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900"
        >
          <ArrowLeft className="w-4 h-4" />
          作品一覧に戻る
        </Link>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
              {project.category}
            </span>
            <span className="text-xs font-semibold text-gray-400">/</span>
            <span className="text-xs font-semibold text-gray-400">{project.period}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            {project.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="space-y-4">
          <div className={`rounded-3xl overflow-hidden bg-gradient-to-br ${project.color} p-6`}>
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-white/70">
              <ImageWithFallback
                src={project.detailImages[0]}
                alt={`${project.title} メイン画像`}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {project.detailImages.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.detailImages.slice(1).map((image, index) => (
                <div
                  key={`${project.slug}-detail-${index}`}
                  className="rounded-2xl overflow-hidden border border-gray-100 bg-white"
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} 追加画像 ${index + 1}`}
                    className="w-full h-64 object-contain"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">担当</p>
            <p className="text-lg font-semibold text-gray-900">{project.role}</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">期間</p>
            <p className="text-lg font-semibold text-gray-900">{project.period}</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">技術スタック</p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-50 text-gray-600"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">概要</h2>
            <p className="text-gray-500 leading-relaxed">{project.overview}</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">主なポイント</h2>
            <ul className="space-y-3">
              {project.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-500">
                  <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {detailLinks.length > 0 && (
          <div className="flex flex-wrap gap-3">
            {detailLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
                {link.type === "github" ? (
                  <Github className="w-4 h-4" />
                ) : (
                  <ExternalLink className="w-4 h-4" />
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
