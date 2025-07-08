'use client';

import { Shovel, Sprout, Newspaper } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/src/components/ui/dialog';
import SubscribeForm from '@/src/components/SubscribeForm';

interface SubscribeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SubscribeModal({ open, onOpenChange }: SubscribeModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-eucalyptus-600">
            Stay Connected to The Land
          </DialogTitle>
          <DialogDescription className="text-eucalyptus-400">
            Subscribe to receive thoughtful, seasonal updates directly from the farm to your inbox.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-eucalyptus-600 mb-4">
              When you join our mailing list, you'll be the first to receive:
            </h3>
            <ul role="list" className="space-y-4">
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

          <SubscribeForm />
        </div>
      </DialogContent>
    </Dialog>
  );
}
