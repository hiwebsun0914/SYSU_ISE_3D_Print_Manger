import { useState } from 'react';
import { Bug, Mail, MessageCircle, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WECHAT_CONTACT = '18561827151';
const EMAIL_CONTACT = 'sunbh23@mail2.sysu.edu.cn';

export function BugReportBubble() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-40 w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 flex items-center justify-center"
        title={t('bugReport.title')}
      >
        <Bug className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-full max-w-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Bug className="w-5 h-5 text-red-500" />
                {t('bugReport.title')}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label={t('common.close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 space-y-3">
              <div className="rounded-lg bg-gray-50 dark:bg-gray-900/40 px-4 py-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-200">
                  <MessageCircle className="w-4 h-4 text-green-500" />
                  联系微信：{WECHAT_CONTACT}
                </div>
              </div>

              <a
                href={`mailto:${EMAIL_CONTACT}`}
                className="flex items-center gap-2 rounded-lg bg-gray-50 dark:bg-gray-900/40 px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-900/60 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                联系邮箱：{EMAIL_CONTACT}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
