import pytest
from translate import translate_to_number

def test_abc_should_be_converted_in_2():
    assert translate_to_number("ABC") == "222"


def test_def_should_be_converted_in_3():
    assert translate_to_number("DEF") == "333"


def test_ghi_should_be_converted_in_4():
    assert translate_to_number("GHI") == "444"


def test_jkl_should_be_converted_in_5():
    assert translate_to_number("JKL") == "555"


def test_mno_should_be_converted_in_6():
    assert translate_to_number("MNO") == "666"


def test_pqrs_should_be_converted_in_7():
    assert translate_to_number("PQRS") == "7777"


def test_tuv_should_be_converted_in_8():
    assert translate_to_number("TUV") == "888"


def test_wxyz_should_be_converted_in_9():
    assert translate_to_number("WXYZ") == "9999"


def test_dashe_zero_one_should_be_keeped():
    assert translate_to_number("0-1") == "0-1"


def test_expression_should_be_at_least_one_char():
    with pytest.raises(ValueError):
        translate_to_number("")


def test_expression_maximum_are_thirty_chars():
    long_expression = (
        "1111111111"  # 10 chars
        "1111111111"
        "1111111111"
        "1"
    )
    with pytest.raises(ValueError):
        translate_to_number(long_expression)


def test_expression_with_invalid_chars():
    with pytest.raises(ValueError):
        translate_to_number("I-****-MY_JOB")
