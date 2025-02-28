
import { MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Sample data
const articles = [
  {
    id: 1,
    title: 'How Regular Exercise Impacts Heart Health',
    excerpt: 'Learn how just 30 minutes of daily exercise can significantly improve cardiovascular health.',
    image: '/placeholder.svg',
    category: 'Fitness',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'Understanding Blood Pressure Readings',
    excerpt: 'A comprehensive guide to interpreting your blood pressure numbers and what they mean for your health.',
    image: '/placeholder.svg',
    category: 'Education',
    readTime: '8 min read',
  },
  {
    id: 3,
    title: 'The Importance of Mental Health Check-ins',
    excerpt: 'Regular mental health check-ins can help prevent burnout and improve overall wellbeing.',
    image: '/placeholder.svg',
    category: 'Mental Health',
    readTime: '6 min read',
  },
];

export function HealthTips() {
  return (
    <div className="space-y-4">
      {articles.map((article) => (
        <div key={article.id} className="flex gap-4 hover-lift animate-fade-in">
          <div className="hidden sm:block w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-xs">
                {article.category}
              </Badge>
              <span className="text-xs text-muted-foreground">{article.readTime}</span>
            </div>
            
            <h3 className="font-medium story-link text-sm sm:text-base leading-tight">
              {article.title}
            </h3>
            
            <p className="text-xs text-muted-foreground line-clamp-2">{article.excerpt}</p>
          </div>
          
          <Button variant="ghost" size="icon" className="flex-shrink-0 h-8 w-8">
            <MoreHorizontal size={16} />
          </Button>
        </div>
      ))}
    </div>
  );
}
