export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: 'all' | '3d' | 'branding' | 'packaging';
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
}