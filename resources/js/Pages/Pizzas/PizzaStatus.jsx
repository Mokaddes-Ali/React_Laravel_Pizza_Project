export default function PizzaStatus({ currentStatus }) {
    const statuses = [
        'Ordered',
        'Preparing',
        'Baking',
        'Checking',
        'Ready',
        'Delivered'
    ];

    const getClass = (status, index) => {
        let baseClasses = 'w-1/' + statuses.length + ' bg-gradient-to-b flex items-center justify-center h-20 border-r-2 transition-all';

        if (index === 0) {
            baseClasses += ' rounded-l-full';
        }

        if (index === statuses.length - 1) {
            baseClasses = baseClasses.replace('border-r-2', 'rounded-r-full');
        }

        if (status === currentStatus) {
            baseClasses = baseClasses.replace('border-r-2', '');
            return `${baseClasses} from-red-500 to-red-600 scale-110 rounded-lg shadow-xl transform duration-300`;
        }

        if (statuses.indexOf(currentStatus) > index) {
            return `${baseClasses} from-blue-500 to-blue-600 border-blue-700`;
        }

        return `${baseClasses} from-blue-300 to-blue-400 border-blue-500`;
    };

    return (
        <div className="flex justify-center items-center w-full p-6">
            <div className="flex border-4 border-blue-200 rounded-full overflow-hidden shadow-lg">
                {statuses.map((status, index) => (
                    <div key={index} className={getClass(status, index)}>
                        <p className="uppercase font-semibold text-white drop-shadow-lg text-center px-4">
                            <span className="block text-3xl font-bold">{index + 1}</span>
                            <span className="text-xs tracking-wider">{status}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
