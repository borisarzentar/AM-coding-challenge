import Stack from '../Stack';
import Button from '../Button';
import Text from '../Typography/Text';
import ArrowLeft from '../Icons/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight';

interface MonthSwitchProps {
  value: string;
  onNextClick: () => void;
  onPreviousClick: () => void;
}

const MonthSwitch = ({
  value,
  onNextClick,
  onPreviousClick,
}: MonthSwitchProps) => {
  return (
    <Stack orientation="horizontal" gap="16" align="center">
      <Text size="3" style={{ minWidth: '321px' }} bold>
        {value}
      </Text>

      <Stack orientation="horizontal" gap="9">
        <Button onClick={onPreviousClick}>
          <ArrowLeft />
        </Button>
        <Button onClick={onNextClick}>
          <ArrowRight />
        </Button>
      </Stack>
    </Stack>
  );
};

export default MonthSwitch;
