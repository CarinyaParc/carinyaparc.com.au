'use client';

import { Shovel, Sprout, Newspaper } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@repo/ui/dialog';
import SubscribeForm from '@/src/components/SubscribeForm';

interface SubscribeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SubscribeModal({ open, onOpenChange }: SubscribeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] ">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold text-eucalyptus-600">
            Stay Connected to The Land
          </DialogTitle>
          <DialogDescription className="px-6 mt-6 text-base/7 text-charcoal-600">
            When you join our mailing list, you'll be the first to receive:
          </DialogDescription>
          <div className="px-6">
            <ul role="list" className="mt-8 space-y-6">
              <li className="flex gap-x-3">
                <Shovel className="h-5 w-5 text-eucalyptus-300 mt-0.5" />
                <span className="text-sm">
                  <strong className="font-semibold">Invitations to Participate:</strong> Early
                  notifications about planting days, workshops and volunteer opportunities
                </span>
              </li>
              <li className="flex gap-x-3">
                <Sprout className="h-5 w-5 text-eucalyptus-300 mt-0.5" />
                <span className="text-sm">
                  <strong className="font-semibold">Seasonal Inspiration:</strong> Recipes and
                  cooking tips that follow the rhythm of our developing gardens
                </span>
              </li>
              <li className="flex gap-x-3">
                <Newspaper className="h-5 w-5 text-eucalyptus-300 mt-0.5" />
                <span className="text-sm">
                  <strong className="font-semibold">Regeneration Stories:</strong> Photo-rich
                  updates showing the transformation of our landscape over time
                </span>
              </li>
            </ul>
          </div>
        </DialogHeader>
        <SubscribeForm showName={false} showInterests={false} />
      </DialogContent>
    </Dialog>
  );
}
